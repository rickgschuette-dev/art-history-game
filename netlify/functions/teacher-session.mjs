import { createHmac, timingSafeEqual } from 'node:crypto';

const COOKIE = 'art_history_teacher';

function accessCode() {
  return typeof Netlify !== 'undefined'
    ? Netlify.env.get('TEACHER_ACCESS_CODE')
    : process.env.TEACHER_ACCESS_CODE;
}

function cookieValue(request, name) {
  const pairs = (request.headers.get('cookie') || '').split(';');
  for (const pair of pairs) {
    const index = pair.indexOf('=');
    if (index > -1 && pair.slice(0, index).trim() === name) return decodeURIComponent(pair.slice(index + 1).trim());
  }
  return '';
}

function validSession(request, code) {
  const token = cookieValue(request, COOKIE);
  const parts = token.split('.');
  if (parts.length !== 2 || !/^[0-9]+$/.test(parts[0]) || Date.now() > Number(parts[0])) return false;
  const expected = createHmac('sha256', code).update(parts[0]).digest('base64url');
  const received = Buffer.from(parts[1]);
  const expectedBuffer = Buffer.from(expected);
  return received.length === expectedBuffer.length && timingSafeEqual(received, expectedBuffer);
}

export default async function teacherSession(request) {
  const code = accessCode();
  const headers = { 'Cache-Control': 'no-store' };
  if (!code) return Response.json({ error: 'Teacher access is not configured yet.' }, { status: 503, headers });
  if (!validSession(request, code)) return Response.json({ error: 'Sign in required.' }, { status: 401, headers });
  return Response.json({ teacher: { name: 'Teacher' } }, { headers });
}
