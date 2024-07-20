import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: [
    // Include all routes except static files and Next.js internal paths
    "/((?!.*\\..*|_next).*)",
    // Explicitly include the root path
    "/",
    // Apply middleware to API and TRPC routes
    "/(api|trpc)(.*)",
    // Include specific routes if necessary
    "/events/:id",
    "/api/webhook/clerk",
    "/api/webhook/stripe",
    "/api/uploadthing",
  ],
};
