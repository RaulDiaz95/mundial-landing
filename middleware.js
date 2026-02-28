import { NextResponse } from "next/server";

export function middleware(request) {
  const { pathname } = request.nextUrl;
  const locale = pathname.startsWith("/en") ? "en" : "es";
  const response = NextResponse.next();

  response.cookies.set("NEXT_LOCALE", locale, { path: "/" });

  return response;
}

export const config = {
  matcher: ["/", "/en/:path*"],
};
