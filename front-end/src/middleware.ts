import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

export default async function middleware(request: NextRequest) {
  const secret = new TextEncoder().encode(process.env.JWT_SECRET_KEY);
  const token = request.cookies.get("_session")?.value;
  const loginUrl = new URL("/auth", request.url);

  if (!token) {
    return NextResponse.redirect(loginUrl);
  }

  try {
    const { payload } = await jwtVerify(token, secret, {
      algorithms: ["HS256"],
    });

    return NextResponse.next();
  } catch (error) {
    console.log(error);
    return NextResponse.redirect(loginUrl);
  }
}

export const config = {
  matcher: [
    // Aplica o middleware para todas as rotas, exceto as listadas abaixo
    "/((?!_next/static|_next/image|favicon.ico|auth|api/auth|api/logout).*)",
  ],
};
