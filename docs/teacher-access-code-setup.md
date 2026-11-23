# Teacher Review access code

Teacher Review uses one shared access code during curriculum testing. The code is never stored in the repository or sent to a browser until a teacher types it into the sign-in form.

## Set the code in Netlify

1. Open the Netlify project, then select **Environment variables**.
2. Add a variable named `TEACHER_ACCESS_CODE`.
3. Give it a long, memorable value that you will share only with the teachers testing the curriculum.
4. Make sure the variable is available to **Functions** and the production deploy context.
5. Save it, then trigger a new deploy. Environment-variable values are fixed when each deploy is built.

## Use Teacher Review

Open `https://arthistorygame.netlify.app/#/teacher`, enter the access code, and select **Open Teacher Review**. The browser remains signed in for 12 hours. Select **Sign out** on the dashboard when you are finished.

## Scope

This is deliberately a testing-stage access method. Before the site stores real student folios, replace the shared code with individual teacher accounts and a secure student-data service.
