const sessionCookieName = "lifeos_session";
const defaultLoginEmail = "damienbrace@gmail.com";

export function getLoginEmail() {
  return process.env.LIFEOS_LOGIN_EMAIL ?? defaultLoginEmail;
}

export function getLoginPassword() {
  return process.env.LIFEOS_LOGIN_PASSWORD ?? "";
}

export function getSessionSecret() {
  return process.env.LIFEOS_SESSION_SECRET ?? "";
}

export function getSessionCookieName() {
  return sessionCookieName;
}

export async function createSessionToken(email: string) {
  const secret = getSessionSecret();

  if (!secret) {
    return "";
  }

  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { hash: "SHA-256", name: "HMAC" },
    false,
    ["sign"]
  );
  const signature = await crypto.subtle.sign("HMAC", key, encoder.encode(email.toLowerCase()));

  return Array.from(new Uint8Array(signature))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

export async function isValidSessionToken(token?: string) {
  if (!token) {
    return false;
  }

  const expectedToken = await createSessionToken(getLoginEmail());
  return Boolean(expectedToken) && token === expectedToken;
}
