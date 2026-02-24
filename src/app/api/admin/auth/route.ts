import { NextRequest, NextResponse } from "next/server";
import {
  verifyAdminPassword,
  createAdminToken,
  getAdminCookieOptions,
} from "@/lib/admin-auth";

export async function POST(request: NextRequest) {
  try {
    const { password } = await request.json();

    if (!password || !verifyAdminPassword(password)) {
      return NextResponse.json(
        { error: "Mot de passe incorrect." },
        { status: 401 }
      );
    }

    const token = createAdminToken();
    const cookieOptions = getAdminCookieOptions();

    const response = NextResponse.json({ success: true });
    response.cookies.set(cookieOptions.name, token, {
      httpOnly: cookieOptions.httpOnly,
      secure: cookieOptions.secure,
      sameSite: cookieOptions.sameSite,
      maxAge: cookieOptions.maxAge,
      path: cookieOptions.path,
    });

    return response;
  } catch {
    return NextResponse.json({ error: "Erreur serveur." }, { status: 500 });
  }
}

export async function DELETE() {
  const cookieOptions = getAdminCookieOptions();
  const response = NextResponse.json({ success: true });
  response.cookies.set(cookieOptions.name, "", {
    httpOnly: cookieOptions.httpOnly,
    secure: cookieOptions.secure,
    sameSite: cookieOptions.sameSite,
    maxAge: 0,
    path: cookieOptions.path,
  });
  return response;
}
