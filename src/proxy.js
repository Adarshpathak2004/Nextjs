import { NextResponse } from "next/server";

function generateNonce() {
  const array = new Uint8Array(16);
  crypto.getRandomValues(array);
  return btoa(String.fromCharCode(...array));
}

export function proxy(request) {
  const nonce = generateNonce();
  const response = NextResponse.next();

  response.headers.set(
    "Content-Security-Policy",
    `default-src 'self'; script-src 'self' 'nonce-${nonce}'; style-src 'self' 'nonce-${nonce}'; img-src 'self' data:; font-src 'self'; connect-src 'self'; frame-src 'none'; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none';`
      .replace(/\s{2,}/g, " ")
      .trim()
  );
  response.headers.set("x-nonce", nonce);

  const user = request.cookies.get("user")?.value;

  if (!user && request.nextUrl.pathname.startsWith("/profile")) {
    return NextResponse.redirect(new URL("/signin", request.url));
  }

  return response;
}

export const config = {
  matcher: ["/profile/:path*"],
};
