import { NextResponse, NextRequest } from "next/server";

export function middleware(request: NextRequest) {

    // Middleware path matcher
    if (request.url.includes('/api/')) {
        // console.log('The newly formed middleware')

        // console.log(request.headers)
        // console.log(request.url)

        // const origin = request.headers.get('origin')
        // console.log(origin)
    }

    // Using regex for middleware path matcher
    const regex = new RegExp('/api/*')

    if (regex.test(request.url)) {
        // console.log('The newly formed middleware')

        // console.log(request.headers)
        // console.log(request.url)

        // const origin = request.headers.get('origin')
        // console.log(origin)
    }

    console.log('The newly formed middleware')

    console.log(request.headers)
    console.log(request.url)

    const origin = request.headers.get('origin')
    console.log(origin)

    return NextResponse.next()
}

export const config = {
    matcher: '/api/:path*'
}