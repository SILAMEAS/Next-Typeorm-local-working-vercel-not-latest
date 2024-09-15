import {NextResponse} from "next/server";

export function middleware(req) {
    const response = NextResponse.next();

    response.headers.set('Cache-Control', 'no-store');
    response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    response.headers.set('Expires', '0');
    response.headers.set('Pragma', 'no-cache');
    return response;
}
