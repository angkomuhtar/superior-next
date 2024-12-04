import { betterFetch } from "@better-fetch/fetch";
import type { Session } from "better-auth/types";
import { NextResponse, type NextRequest } from "next/server";

// export default async function middleware(request: NextRequest) {
//   console.log("running middleware");

//   //   const isPublicRoute = createRouteMatcher(["/sign-in/*", "/sign-up/*"]);
//   //   // const isAdminRoute = createRouteMatcher(["/admin(.*)"]);

//   //   const { data: session } = await betterFetch<Session>(
//   //     "/api/auth/get-session",
//   //     {
//   //       baseURL: request.nextUrl.origin,
//   //       headers: {
//   //         //get the cookie from the request
//   //         cookie: request.headers.get("cookie") || "",
//   //       },
//   //     }
//   //   );

//   //   if (!session && !isPublicRoute) {
//   //     return NextResponse.redirect(new URL("/sign-in", request.url));
//   //   }
//   return NextResponse.next();
// }

export default async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  console.log("running on ", pathname);

  function matchWithWildcard(path, pattern) {
    const parts = pattern.split("*"); // Split pattern on '*'
    let currentIndex = 0;

    for (const part of parts) {
      if (part) {
        // Ignore empty parts from multiple '*'
        currentIndex = path.indexOf(part, currentIndex);
        if (currentIndex === -1) return false; // Part not found
        currentIndex += part.length;
      }
    }

    return true;
  }

  function pathMatches(patterns: any[]) {
    return patterns.some((pattern) =>
      pattern.includes("*")
        ? matchWithWildcard(pathname, pattern)
        : pathname === pattern
    );
  }

  const { data: session } = await betterFetch<Session>(
    "/api/auth/get-session",
    {
      baseURL: request.nextUrl.origin,
      headers: {
        //get the cookie from the request
        cookie: request.headers.get("cookie") || "",
      },
    }
  );

  const isProtected = pathMatches(["/admin"]);

  console.log(session, isProtected, pathname);

  if (!session && isProtected) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // "/(api|trpc)(.*)",
    // "!/api/auth/:path*",
  ],
};
