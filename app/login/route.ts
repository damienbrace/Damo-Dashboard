import { NextResponse } from "next/server";
import {
  createSessionToken,
  getLoginEmail,
  getLoginPassword,
  getSessionCookieName,
  getSessionSecret
} from "@/lib/auth";

export async function POST(request: Request) {
  const formData = await request.formData();
  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  const password = String(formData.get("password") ?? "");
  const expectedEmail = getLoginEmail().toLowerCase();
  const expectedPassword = getLoginPassword();
  const sessionSecret = getSessionSecret();

  if (!expectedPassword || !sessionSecret) {
    return NextResponse.redirect(new URL("/?error=missing-config", request.url), 303);
  }

  if (email !== expectedEmail || password !== expectedPassword) {
    return NextResponse.redirect(new URL("/?error=invalid", request.url), 303);
  }

  const response = NextResponse.redirect(new URL("/home", request.url), 303);
  response.cookies.set({
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 30,
    name: getSessionCookieName(),
    path: "/",
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    value: await createSessionToken(expectedEmail)
  });

  return response;
}
