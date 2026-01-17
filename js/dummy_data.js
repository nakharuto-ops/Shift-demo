/**
 * Demo Version - Dummy Data
 * すべてのデータは架空のものです。実在する人物・団体とは一切関係ありません。
 */

// ========================================
// 職員データ（5名）
// ========================================
const DEMO_EMPLOYEES = [
    {
        id: 'EMP001',
        name: '田中 太郎',
        furigana: 'たなか たろう',
        position: '管理者',
        enrollmentStatus: '在職',
        gender: '男',
        birthDate: '1975-04-15',
        hireDate: '2015-04-01',
        zipCode: '100-0001',
        address: '東京都サンプル区デモ町1-1-1',
        qualifications: ['介福', '実務者'],
        socialInsuranceType: '社保・雇用',
        systemicMobilitySupport: false,
        healthCheckupDate: '2025-10-15',
        notice: ''
    },
    {
        id: 'EMP002',
        name: '佐藤 花子',
        furigana: 'さとう はなこ',
        position: 'サ責',
        enrollmentStatus: '在職',
        gender: '女',
        birthDate: '1982-08-22',
        hireDate: '2018-06-01',
        zipCode: '100-0002',
        address: '東京都サンプル区デモ町2-2-2',
        qualifications: ['介福', '初任者'],
        socialInsuranceType: '社保・雇用',
        systemicMobilitySupport: false,
        healthCheckupDate: '2025-10-20',
        notice: ''
    },
    {
        id: 'EMP003',
        name: '鈴木 一郎',
        furigana: 'すずき いちろう',
        position: 'ヘルパー',
        enrollmentStatus: '在職',
        gender: '男',
        birthDate: '1990-03-10',
        hireDate: '2020-04-01',
        zipCode: '100-0003',
        address: '東京都サンプル区デモ町3-3-3',
        qualifications: ['初任者'],
        socialInsuranceType: '雇用保険',
        systemicMobilitySupport: true,
        healthCheckupDate: '2025-11-05',
        notice: ''
    },
    {
        id: 'EMP004',
        name: '高橋 美咲',
        furigana: 'たかはし みさき',
        position: 'ヘルパー',
        enrollmentStatus: '在職',
        gender: '女',
        birthDate: '1988-12-05',
        hireDate: '2021-09-01',
        zipCode: '100-0004',
        address: '東京都サンプル区デモ町4-4-4',
        qualifications: ['実務者', '初任者'],
        socialInsuranceType: '雇用保険',
        systemicMobilitySupport: false,
        healthCheckupDate: '2025-11-10',
        notice: ''
    },
    {
        id: 'EMP005',
        name: '山田 健太',
        furigana: 'やまだ けんた',
        position: 'ヘルパー',
        enrollmentStatus: '在職',
        gender: '男',
        birthDate: '1995-07-20',
        hireDate: '2023-04-01',
        zipCode: '100-0005',
        address: '東京都サンプル区デモ町5-5-5',
        qualifications: ['初任者'],
        socialInsuranceType: '雇用保険',
        systemicMobilitySupport: false,
        healthCheckupDate: '2025-12-01',
        notice: ''
    }
];

// ========================================
// 利用者データ（6名）
// ========================================
const DEMO_USERS = [
    {
        id: 'USR001',
        name: '山本 一夫',
        furigana: 'やまもと かずお',
        gender: '男',
        birthDate: '1945-02-10',
        serviceType: '訪問介護',
        careLevel: '要介護3',
        address: '東京都サンプル区利用者町1-1',
        phone: '03-0000-0001',
        emergencyContact: 'デモ 太郎（長男）03-0000-1001',
        status: '利用中',
        registrationDate: '2022-04-01',
        memo: ''
    },
    {
        id: 'USR002',
        name: '小林 幸子',
        furigana: 'こばやし さちこ',
        gender: '女',
        birthDate: '1940-06-15',
        serviceType: '居宅介護',
        careLevel: '要介護2',
        address: '東京都サンプル区利用者町2-2',
        phone: '03-0000-0002',
        emergencyContact: 'デモ 次郎（長男）03-0000-1002',
        status: '利用中',
        registrationDate: '2021-10-01',
        memo: ''
    },
    {
        id: 'USR003',
        name: '加藤 正男',
        furigana: 'かとう まさお',
        gender: '男',
        birthDate: '1950-11-20',
        serviceType: '重度訪問',
        careLevel: '要介護5',
        address: '東京都サンプル区利用者町3-3',
        phone: '03-0000-0003',
        emergencyContact: 'デモ 三郎（妻）03-0000-1003',
        status: '利用中',
        registrationDate: '2020-05-15',
        memo: ''
    },
    {
        id: 'USR004',
        name: '渡辺 きよ',
        furigana: 'わたなべ きよ',
        gender: '女',
        birthDate: '1938-09-08',
        serviceType: '訪問介護',
        careLevel: '要介護4',
        address: '東京都サンプル区利用者町4-4',
        phone: '03-0000-0004',
        emergencyContact: 'デモ 四郎（娘）03-0000-1004',
        status: '利用中',
        registrationDate: '2023-01-10',
        memo: ''
    },
    {
        id: 'USR005',
        name: '伊藤 勇',
        furigana: 'いとう いさむ',
        gender: '男',
        birthDate: '1948-04-25',
        serviceType: '居宅介護',
        careLevel: '要介護2',
        address: '東京都サンプル区利用者町5-5',
        phone: '03-0000-0005',
        emergencyContact: 'デモ 五郎（長女）03-0000-1005',
        status: '利用中',
        registrationDate: '2022-08-20',
        memo: ''
    },
    {
        id: 'USR006',
        name: '中村 節子',
        furigana: 'なかむら せつこ',
        gender: '女',
        birthDate: '1942-01-30',
        serviceType: '訪問介護',
        careLevel: '要介護3',
        address: '東京都サンプル区利用者町6-6',
        phone: '03-0000-0006',
        emergencyContact: 'デモ 六郎（長男）03-0000-1006',
        status: '利用中',
        registrationDate: '2021-03-01',
        memo: ''
    }
];

// ========================================
// シフトデータ生成関数
// ========================================
function generateShiftData() {
    const shifts = [];
    const today = new Date();

    // 過去2週間 + 来週のシフトを生成
    for (let dayOffset = -14; dayOffset <= 7; dayOffset++) {
        const date = new Date(today);
        date.setDate(today.getDate() + dayOffset);
        const dateStr = date.toISOString().split('T')[0];
        const dayOfWeek = date.getDay();

        // 土日は休み
        if (dayOfWeek === 0 || dayOfWeek === 6) continue;

        // 各利用者に対してランダムな職員を割り当て
        DEMO_USERS.forEach((user, userIndex) => {
            // 70%の確率でシフトを作成
            if (Math.random() > 0.3) {
                const employeeIndex = (userIndex + dayOffset) % DEMO_EMPLOYEES.length;
                const employee = DEMO_EMPLOYEES[employeeIndex < 0 ? employeeIndex + DEMO_EMPLOYEES.length : employeeIndex];

                // 時間帯をランダムに設定
                const timePatterns = [
                    { start: '09:00', end: '11:00' },
                    { start: '10:00', end: '12:00' },
                    { start: '13:00', end: '15:00' },
                    { start: '14:00', end: '16:00' },
                    { start: '16:00', end: '18:00' }
                ];
                const timePattern = timePatterns[Math.floor(Math.random() * timePatterns.length)];

                shifts.push({
                    id: `SHIFT-${dateStr}-${user.id}`,
                    date: dateStr,
                    userId: user.id,
                    userName: user.name,
                    employeeId: employee.id,
                    employeeName: employee.name,
                    serviceType: user.serviceType,
                    startTime: timePattern.start,
                    endTime: timePattern.end,
                    status: dayOffset < 0 ? '完了' : '予定'
                });
            }
        });
    }

    return shifts;
}

// ========================================
// サービス報告データ生成関数
// ========================================
function generateServiceReports() {
    const reports = [];
    const today = new Date();

    // 各利用者に対して3件以上の報告を生成
    DEMO_USERS.forEach(user => {
        for (let i = 0; i < 4; i++) {
            const date = new Date(today);
            date.setDate(today.getDate() - (i * 3 + Math.floor(Math.random() * 3)));
            const dateStr = date.toISOString().split('T')[0];

            const employeeIndex = Math.floor(Math.random() * DEMO_EMPLOYEES.length);
            const employee = DEMO_EMPLOYEES[employeeIndex];

            const serviceContents = [
                '身体介護（入浴介助）',
                '身体介護（排泄介助）',
                '生活援助（掃除）',
                '生活援助（調理）',
                '身体介護（移動介助）'
            ];

            const vitalPatterns = [
                { temp: '36.2', bloodPressureHigh: '125', bloodPressureLow: '78', pulse: '72' },
                { temp: '36.5', bloodPressureHigh: '130', bloodPressureLow: '82', pulse: '68' },
                { temp: '36.8', bloodPressureHigh: '118', bloodPressureLow: '75', pulse: '75' },
                { temp: '36.3', bloodPressureHigh: '135', bloodPressureLow: '85', pulse: '70' }
            ];
            const vitals = vitalPatterns[Math.floor(Math.random() * vitalPatterns.length)];

            reports.push({
                id: `REPORT-${dateStr}-${user.id}-${i}`,
                date: dateStr,
                userId: user.id,
                userName: user.name,
                employeeId: employee.id,
                employeeName: employee.name,
                serviceType: user.serviceType,
                serviceContent: serviceContents[Math.floor(Math.random() * serviceContents.length)],
                startTime: '10:00',
                endTime: '12:00',
                vitals: vitals,
                notes: 'サンプル記録です。特記事項なし。',
                status: '報告済み'
            });
        }
    });

    return reports;
}

// ========================================
// データ初期化
// ========================================
const DEMO_SHIFTS = generateShiftData();
const DEMO_SERVICE_REPORTS = generateServiceReports();

// グローバルにエクスポート
window.DEMO_DATA = {
    employees: DEMO_EMPLOYEES,
    users: DEMO_USERS,
    shifts: DEMO_SHIFTS,
    serviceReports: DEMO_SERVICE_REPORTS
};

console.log('[DEMO] Dummy data loaded:', {
    employees: DEMO_EMPLOYEES.length,
    users: DEMO_USERS.length,
    shifts: DEMO_SHIFTS.length,
    serviceReports: DEMO_SERVICE_REPORTS.length
});
