import { fetchWithAuth, fetchWithoutAuth } from '@/configs';
import {
    ActionResponse,
    InfoResponse,
    ResponseType,
    TokenResponse,
    UserLogin,
    UserType,
} from '@/types';

const setCookies = async ({
    accessToken,
    refreshToken,
}: {
    accessToken: string;
    refreshToken: string;
}) => {
    await fetch('http://localhost:3000/api/auth', {
        method: 'POST',
        body: JSON.stringify({ accessToken, refreshToken }),
    });
};

const login = async (data: any) => {
    const token: TokenResponse = await fetchWithoutAuth(
        'auth/login',
        { method: 'POST' },
        data,
    );

    if (token.statusCode === 200) {
        await setCookies(token.data);
        return { success: true, token: token.data };
    }

    return {
        success: false,
        message: token.message,
    };
};

const register = async (data: any): Promise<ActionResponse> => {
    const res: ResponseType = await fetchWithoutAuth(
        'auth/register',
        { method: 'POST' },
        data,
    );

    if (res.statusCode !== 201) {
        return { success: false, message: res.message };
    }

    return { success: true, message: res.message };
};

const me = async (): Promise<UserLogin> => {
    const res: InfoResponse<UserType> = await fetchWithAuth('auth/me');

    if (res.statusCode === 200) {
        return { isLogin: true, userInfo: res.data };
    }

    return { isLogin: false };
};

const refresh = async (token: string) => {
    const res: TokenResponse = await fetchWithoutAuth('auth/refresh', {
        headers: { 'rf-token': token },
    });

    if (res.statusCode === 200) {
        setCookies(res.data);
        return { success: true, token: res.data };
    }

    return {
        success: false,
        message: res.message,
    };
};

export const AuthAction = {
    login,
    register,
    me,
    refresh,
};
