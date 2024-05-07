import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import { HEADERS } from './constants';

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
    if (request.nextUrl.pathname.startsWith('/login')) {
        // Handle login routes
        if (request.cookies.has(HEADERS.ACCESS_TOKEN)) {
            return NextResponse.redirect(new URL('/', request.url)); // Redirect to a different route (e.g., home)
        }
        return NextResponse.next(); // Allow access to the login page
    } else if (
        request.nextUrl.pathname.startsWith('/me') ||
        request.nextUrl.pathname.endsWith('/post')
    ) {
        if (!request.cookies.has(HEADERS.ACCESS_TOKEN)) {
            console.log('No token ====> redirect to login...');
            return NextResponse.redirect(new URL('/', request.url));
        }
    } else {
        return NextResponse.next(); // Allow access to the requested route
    }
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: ['/', '/login', '/me', '/post'],
};
