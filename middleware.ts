import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

export async function middleware(
  request: NextRequest
) {
  let response = NextResponse.next({
    request,
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },

        setAll(cookiesToSet) {
          cookiesToSet.forEach(
            ({ name, value }) =>
              request.cookies.set(name, value)
          );

          response = NextResponse.next({
            request,
          });

          cookiesToSet.forEach(
            ({ name, value, options }) =>
              response.cookies.set(
                name,
                value,
                options
              )
          );
        },
      },
    }
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const pathname = request.nextUrl.pathname;

  // Protect admin routes
  if (
    pathname.startsWith("/admin") &&
    !user
  ) {
    return NextResponse.redirect(
      new URL("/login", request.url)
    );
  }

  // Prevent logged in users from opening login
  // if (
  //   pathname.startsWith("/login") &&
  //   user
  // ) 
  if (
  (pathname.startsWith("/login") ||
   pathname.startsWith("/forgot-password")) &&
  user
)
  {
    return NextResponse.redirect(
      new URL("/admin", request.url)
    );
  }

  return response;
}

export const config = {
  // matcher: ["/admin", "/admin/:path*", "/login"],
  matcher: [
  "/admin",
  "/admin/:path*",
  "/login",
  "/forgot-password",
  "/reset-password",
],
};