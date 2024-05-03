'use client';

import { Dispatch, SetStateAction, createContext, useState } from 'react';

type SessionType = [
    { accessToken: string; refreshToken: string },
    Dispatch<SetStateAction<{ accessToken: string; refreshToken: string }>>,
];

export const AppContext = createContext<SessionType>([
    { accessToken: '', refreshToken: '' },
    () => {},
]);

const AppProvider = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    const [session, setSession] = useState({
        accessToken: '',
        refreshToken: '',
    });

    return (
        <AppContext.Provider value={[session, setSession]}>
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;
