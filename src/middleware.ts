import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import { HEADERS } from './constants';

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
    if (request.nextUrl.pathname.startsWith('/login')) {
        // Handle login routes
        if (request.cookies.has(HEADERS.ACCESS_TOKEN)) {
            console.log(
                'User already logged in on login route, redirecting...',
            );
            return NextResponse.redirect(new URL('/', request.url)); // Redirect to a different route (e.g., home)
        }
        console.log('No token on login route, allowing access...');
        return NextResponse.next(); // Allow access to the login page
    } else {
        // Handle non-login routes
        if (!request.cookies.has(HEADERS.ACCESS_TOKEN)) {
            console.log('No token ====> redirect to login...');
            return NextResponse.redirect(new URL('/login', request.url));
        }

        console.log('Token found ====> allowing access...');
        return NextResponse.next(); // Allow access to the requested route
    }
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: ['/', '/login'],
};
