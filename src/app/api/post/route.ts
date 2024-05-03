import { cookies } from 'next/headers';

export const GET = async () => {
    return Response.json({ hello: 'world' });
};
