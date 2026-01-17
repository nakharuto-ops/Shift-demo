/**
 * Mock Firebase Layer
 * Firebase操作をモックするレイヤー。デモ版ではFirebaseに接続せず、ローカルデータのみを使用します。
 */

// Firebase SDK のモック
window.firebase = {
    apps: [],
    initializeApp: function (config) {
        console.log('[DEMO] Firebase.initializeApp called - using mock');
        return {};
    },
    auth: function () {
        return {
            onAuthStateChanged: function (callback) {
                // デモ版では常に認証済みとして扱う
                setTimeout(() => {
                    callback({
                        uid: 'demo-user-001',
                        email: 'demo@example.com',
                        displayName: 'デモユーザー'
                    });
                }, 100);
                return function () { }; // unsubscribe
            },
            getRedirectResult: function () {
                return Promise.resolve({ user: null });
            },
            signOut: function () {
                return Promise.resolve();
            },
            currentUser: {
                uid: 'demo-user-001',
                email: 'demo@example.com'
            }
        };
    },
    firestore: function () {
        return window.mockFirestore;
    },
    database: function () {
        return window.mockRealtimeDB;
    }
};

// Google Auth Provider モック
firebase.auth.GoogleAuthProvider = function () { };

// Firestore モック
window.mockFirestore = {
    collection: function (name) {
        return {
            doc: function (id) {
                return {
                    get: function () {
                        return Promise.resolve({
                            exists: true,
                            data: function () {
                                return getMockData(name, id);
                            },
                            id: id
                        });
                    },
                    set: function (data) {
                        console.log('[DEMO] Firestore set:', name, id, data);
                        return Promise.resolve();
                    },
                    update: function (data) {
                        console.log('[DEMO] Firestore update:', name, id, data);
                        return Promise.resolve();
                    },
                    delete: function () {
                        console.log('[DEMO] Firestore delete:', name, id);
                        return Promise.resolve();
                    }
                };
            },
            get: function () {
                return Promise.resolve({
                    empty: false,
                    size: getMockCollectionData(name).length,
                    docs: getMockCollectionData(name).map(item => ({
                        id: item.id,
                        exists: true,
                        data: function () { return item; },
                        ref: { id: item.id }
                    })),
                    forEach: function (callback) {
                        getMockCollectionData(name).forEach(item => {
                            callback({
                                id: item.id,
                                data: function () { return item; }
                            });
                        });
                    }
                });
            },
            add: function (data) {
                console.log('[DEMO] Firestore add:', name, data);
                return Promise.resolve({ id: 'new-doc-' + Date.now() });
            },
            where: function () { return this; },
            orderBy: function () { return this; },
            limit: function () { return this; }
        };
    },
    doc: function (path) {
        const parts = path.split('/');
        return this.collection(parts[0]).doc(parts[1]);
    }
};

// Realtime Database モック
window.mockRealtimeDB = {
    ref: function (path) {
        return {
            once: function () {
                return Promise.resolve({
                    exists: function () { return true; },
                    val: function () { return {}; }
                });
            },
            on: function (event, callback) {
                callback({ val: function () { return {}; } });
            },
            off: function () { },
            set: function (data) {
                console.log('[DEMO] RealtimeDB set:', path, data);
                return Promise.resolve();
            }
        };
    }
};

// Firestore FieldValue モック
firebase.firestore.FieldValue = {
    delete: function () { return '__DELETE__'; },
    serverTimestamp: function () { return new Date().toISOString(); }
};

// データ取得ヘルパー関数
function getMockData(collection, id) {
    const data = getMockCollectionData(collection);
    return data.find(item => item.id === id) || null;
}

function getMockCollectionData(collection) {
    if (!window.DEMO_DATA) {
        console.warn('[DEMO] DEMO_DATA not loaded yet');
        return [];
    }

    switch (collection) {
        case 'employees':
        case 'staff':
            return window.DEMO_DATA.employees || [];
        case 'riyousya':
        case 'users':
            return window.DEMO_DATA.users || [];
        case 'shifts':
        case 'monthlyShifts':
        case 'magnetPlacements':
            return window.DEMO_DATA.shifts || [];
        case 'serviceReports':
        case 'reports':
            return window.DEMO_DATA.serviceReports || [];
        default:
            console.log('[DEMO] Unknown collection:', collection);
            return [];
    }
}

// Modular Firebase SDK 互換レイヤー
window.firestoreUtils = {
    collection: (db, path) => window.mockFirestore.collection(path),
    getDocs: async (query) => {
        const collectionName = query._collectionName || 'unknown';
        const data = getMockCollectionData(collectionName);
        return {
            empty: data.length === 0,
            size: data.length,
            docs: data.map(item => ({
                id: item.id,
                exists: () => true,
                data: () => item,
                ref: { id: item.id }
            })),
            forEach: (callback) => {
                data.forEach(item => callback({
                    id: item.id,
                    exists: () => true,
                    data: () => item,
                    ref: { id: item.id }
                }));
            }
        };
    },
    getDoc: async (ref) => {
        return {
            exists: () => true,
            data: () => ({}),
            id: ref.id || 'unknown',
            ref: ref
        };
    },
    addDoc: async (ref, data) => {
        console.log('[DEMO] addDoc called:', data);
        return { id: 'new-doc-' + Date.now() };
    },
    updateDoc: async (ref, data) => {
        console.log('[DEMO] updateDoc called:', data);
        return Promise.resolve();
    },
    deleteDoc: async (ref) => {
        console.log('[DEMO] deleteDoc called');
        return Promise.resolve();
    },
    doc: (db, path, ...args) => {
        return { id: args[0] || path };
    },
    setDoc: async (ref, data) => {
        console.log('[DEMO] setDoc called:', data);
        return Promise.resolve();
    },
    onSnapshot: (ref, callback) => {
        // 初回のみデータを返す
        setTimeout(() => {
            callback({
                docs: [],
                forEach: () => { }
            });
        }, 100);
        return () => { }; // unsubscribe
    },
    query: (...args) => ({ _collectionName: args[0]?._collectionName || 'unknown' }),
    where: () => ({}),
    orderBy: () => ({}),
    limit: () => ({}),
    serverTimestamp: () => new Date().toISOString(),
    deleteField: () => '__DELETE__'
};

// グローバルエクスポート
window.firebaseDB = window.mockFirestore;
window.db = window.mockFirestore;
window.firebaseModules = window.firestoreUtils;
window.realtimeDb = window.mockRealtimeDB;

console.log('[DEMO] Mock Firebase layer initialized');
