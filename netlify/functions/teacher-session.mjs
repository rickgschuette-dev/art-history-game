import { getUser } from '@netlify/identity';

export default async function teacherSession() {
  const user = await getUser();

  if (!user) {
    return Response.json({ error: 'Sign in required.' }, { status: 401 });
  }

  if (!user.roles.includes('teacher')) {
    return Response.json({ error: 'Teacher access is required.' }, { status: 403 });
  }

  return Response.json({
    teacher: {
      id: user.id,
      name: user.user_metadata?.full_name || user.email || 'Teacher'
    }
  });
}
