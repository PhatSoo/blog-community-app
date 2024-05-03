'use client';

import { AuthAction } from '@/app/actions/auth.action';
import { AppContext } from '@/providers/app.provider';
import { useContext, useEffect } from 'react';

const RefreshToken = () => {
    const [session, setSession] = useContext(AppContext);

    useEffect(() => {
        const interval = setInterval(async () => {
            const res = await AuthAction.refresh(session.refreshToken);

            const token = res.token;

            if (token) {
                setSession(token);
            }
        }, 10 * 60 * 1000);

        return () => clearInterval(interval);
    }, [session]);

    return null;
};

export default RefreshToken;
