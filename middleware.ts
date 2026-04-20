import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export default withAuth(
  function middleware(req) {
    // Redirect signed-in users away from auth pages
    const isAuth = req.nextUrl.pathname.startsWith('/auth');
    const token = req.nextauth.token;

    if (isAuth && token) {
      return NextResponse.redirect(new URL('/dashboard', req.url));
    }

    const response = NextResponse.next();
    response.headers.set('X-Frame-Options', 'DENY');
    response.headers.set('X-Content-Type-Options', 'nosniff');
    response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
    return response;
  },
  {
    callbacks: {
      authorized({ token, req }) {
        const isDashboard = req.nextUrl.pathname.startsWith('/dashboard');
        if (isDashboard) return !!token;
        return true;
      },
    },
    pages: {
      signIn: '/auth/login',
    },
  }
);

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/auth/:path*',
  ],
};
