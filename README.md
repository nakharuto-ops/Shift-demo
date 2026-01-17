# Portfolio Demo - Asahi Care App

This is a PII-free demo version of the Asahi Care App, created for portfolio display.
All personal data (names, addresses, records) has been replaced with dummy data.
No connection to external services (Firebase, Google Apps Script) is performed.

## Demo Pages

1. **User List & Weekly Care Plan**
   - Location: `user-list/index.html`
   - Features: List view of clients, navigation to individual weekly care plans.
   - Credentials: No login required.

2. **Weekly Care Plan**
   - Location: `weekly-care-plan/index.html`
   - Features: View and edit care schedules (mock).
   - Note: Access via User List or directly with `?user=0001` parameter.

3. **Monthly Shift**
   - Location: `monthly-shift/index.html`
   - Features: Calendar view of staff shifts.
   - Note: Data is generated algorithmically for demonstration.

4. **Service Report**
   - Location: `service-report/index.html`
   - Features: Mobile-optimized reporting interface.
   - Note: Login screen is skipped for demo purposes.

5. **Employee List**
   - Location: `employee-list/index.html`
   - Features: Staff directory.

## Technical Notes

- **Mock Data**: All data is loaded from local JavaScript objects or generated on-the-fly.
- **No Backend**: This demo runs entirely in the browser.
- **Safe to Deploy**: Contains no API keys or sensitive configurations.
