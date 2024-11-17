import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";


const isPublic = createRouteMatcher([
  "/:path*",
])

export default clerkMiddleware(async(auth, request) => {
  if(!isPublic(request)){
    // const authObject = await auth()
    // authObject.protect()
    return;
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};