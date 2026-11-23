import { createHmac, timingSafeEqual } from 'node:crypto';

const COOKIE = 'art_history_teacher';
const MAX_AGE = 60 * 60 * 12;

function accessCode() {
  return typeof Netlify !== 'undefined'
    ? Netlify.env.get('TEACHER_ACCESS_CODE')
    : process.env.TEACHER_ACCESS_CODE;
}

function matches(value, expected) {
  const provided = Buffer.from(value || '');
  const actual = Buffer.from(expected || '');
  return provided.length === actual.length && timingSafeEqual(provided, actual);
}

function sessionCookie(code) {
  const expires = Date.now() + MAX_AGE * 1000;
  const signature = createHmac('sha256', code).update(String(expires)).digest('base64url');
  const token = encodeURIComponent(expires + '.' + signature);
  return COOKIE + '=' + token + '; Path=/; Max-Age=' + MAX_AGE + '; HttpOnly; Secure; SameSite=Lax';
}

function expiredCookie() {
  return COOKIE + '=; Path=/; Max-Age=0; HttpOnly; Secure; SameSite=Lax';
}

export default async function teacherAccess(request) {
  const headers = { 'Cache-Control': 'no-store' };
  if (request.method === 'DELETE') {
    headers['Set-Cookie'] = expiredCookie();
    return Response.json({ ok: true }, { headers });
  }
  if (request.method !== 'POST') return Response.json({ error: 'Method not allowed.' }, { status: 405, headers });

  const code = accessCode();
  if (!code) return Response.json({ error: 'Teacher access is not configured yet.' }, { status: 503, headers });

  const body = await request.json().catch(function () { return {}; });
  if (!matches(body.code, code)) return Response.json({ error: 'That access code is not correct.' }, { status: 401, headers });

  headers['Set-Cookie'] = sessionCookie(code);
  return Response.json({ ok: true }, { headers });
}
