'use server';

import { fetchWithAuth } from '@/configs';
import { HEADERS } from '@/constants';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

// Store cookies
export const POST = async (req: NextRequest, res: NextResponse) => {
    const body: { accessToken: string; refreshToken: string } =
        await req.json();

    cookies().set(HEADERS.ACCESS_TOKEN, body.accessToken);

    cookies().set(HEADERS.REFRESH_TOKEN, body.refreshToken);

    return NextResponse.json({ success: true });
};

// /api/me ----> get user login info
export const GET = async () => {
    const res = await fetchWithAuth('auth/me');
};
