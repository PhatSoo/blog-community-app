'use server';

import { HEADERS } from '@/constants';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

// Store cookies
export const POST = async (req: NextRequest, res: NextResponse) => {
    console.log('hello may cung');

    cookies().delete(HEADERS.ACCESS_TOKEN);

    cookies().delete(HEADERS.REFRESH_TOKEN);

    return NextResponse.json({ success: true });
};
