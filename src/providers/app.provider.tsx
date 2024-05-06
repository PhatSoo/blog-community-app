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
    initialSession,
}: {
    children: React.ReactNode;
    initialSession: { accessToken: string; refreshToken: string };
}) => {
    const [session, setSession] = useState(initialSession);

    return (
        <AppContext.Provider value={[session, setSession]}>
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;
