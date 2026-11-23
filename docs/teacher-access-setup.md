# Teacher access setup

This first access-control release is for teachers only. Students cannot create accounts or enter Teacher Review.

## One-time Netlify setup

1. In the Netlify project, open **Identity** and select **Enable Identity**.
2. Under **Registration**, select **Invite only**.
3. Invite each teacher using their school email address. The teacher completes their password setup from the invitation email.
4. Deploy this repository.

The included Identity event assigns the `teacher` role to each accepted invitation. A new role takes effect when the teacher next signs in or refreshes their session.

## In the curriculum

- **Teacher Review** opens the in-app Teacher Sign In screen for an unsigned-in visitor.
- A signed-in teacher is checked by the server before the dashboard is shown.
- **Sign out** ends the browser session on a shared computer.

## Before adding student accounts

Do not invite students through this teacher-only Identity setup. Student sign-in, class rosters, and secure folio storage will use a separate student role and database-backed class membership.
