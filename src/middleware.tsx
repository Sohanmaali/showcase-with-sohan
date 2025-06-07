import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const role = "admin"; // req.cookies.get("role")?.value || "";

  // Check if user is trying to access an admin route
  if (pathname.startsWith("/admin")) {
    // If role is not "admin", redirect to /admin/login
    if (role !== "admin") {
      return NextResponse.redirect(new URL("/admin/login", req.url));
    }
  }

  return NextResponse.next();
}

// Define which paths should use this middleware
export const config = {
  matcher: ["/admin/:path*"], // Apply middleware to all admin routes
};
