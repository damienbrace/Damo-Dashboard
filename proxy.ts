import { NextRequest, NextResponse } from "next/server";
import { getSessionCookieName, isValidSessionToken } from "@/lib/auth";

const protectedRoutes = [
  "/business",
  "/calendar",
  "/documents",
  "/finance",
  "/goals",
  "/groceries",
  "/habits",
  "/home",
  "/journal",
  "/life-admin",
  "/projects",
  "/settings",
  "/tasks"
];

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isProtectedRoute = protectedRoutes.some((route) => pathname === route || pathname.startsWith(`${route}/`));

  if (!isProtectedRoute) {
    return NextResponse.next();
  }

  const token = request.cookies.get(getSessionCookieName())?.value;

  if (await isValidSessionToken(token)) {
    return NextResponse.next();
  }

  const loginUrl = new URL("/", request.url);
  loginUrl.searchParams.set("next", pathname);
  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: [
    "/business/:path*",
    "/calendar/:path*",
    "/documents/:path*",
    "/finance/:path*",
    "/goals/:path*",
    "/groceries/:path*",
    "/habits/:path*",
    "/home/:path*",
    "/journal/:path*",
    "/life-admin/:path*",
    "/projects/:path*",
    "/settings/:path*",
    "/tasks/:path*"
  ]
};
