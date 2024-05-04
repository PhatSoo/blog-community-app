'use server';

import { HEADERS } from '@/constants';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const API_URL = process.env.API_URL;

export const fetchWithoutAuth = async (
    route: string,
    options: RequestInit = {},
    data: any = {},
) => {
    const url = route.startsWith('/')
        ? `${API_URL}${route}`
        : `${API_URL}/${route}`;

    const fetchOptions: RequestInit = {
        ...options,
        method: options.method || 'GET',
        headers: {
            'Content-Type': 'application/json',
            ...(options.headers || {}),
        },
        body: ['POST', 'PATCH'].includes(options.method ?? 'GET')
            ? (options.body = JSON.stringify(data))
            : null,
    };

    try {
        const res = await fetch(url, fetchOptions);

        return await res.json();
    } catch (error) {
        console.log('server error::::', error);
        redirect('server-error');
    }
};

export const fetchWithAuth = async (
    route: string,
    options: RequestInit = {},
    data: any = {},
) => {
    const url = route.startsWith('/')
        ? `${API_URL}${route}`
        : `${API_URL}/${route}`;

    let acToken = cookies().get(HEADERS.ACCESS_TOKEN)?.value ?? '';

    const fetchOptions: RequestInit = {
        method: options.method || 'GET',
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${acToken}`,
            ...(options.headers || {}),
        },
        body: ['POST', 'PATCH'].includes(options.method ?? 'GET')
            ? (options.body = JSON.stringify(data))
            : null,
    };

    try {
        const res = await fetch(url, fetchOptions);
        return await res.json();
    } catch (error) {
        console.log('server error::::', error);
        redirect('server-error');
    }
};
