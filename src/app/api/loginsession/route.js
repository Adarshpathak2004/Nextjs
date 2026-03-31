import { cookies } from "next/headers";

export async function POST(request) {
  const { email } = await request.json();

  if (!email || !email.trim()) {
    return new Response("Email is required", { status: 400 });
  }

  const cookieStore = await cookies();
  cookieStore.set("user", email.trim(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24,
  });

  return new Response("Login successful", { status: 200 });
}
