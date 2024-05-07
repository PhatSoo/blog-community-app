'use client';

import {
    Dispatch,
    SetStateAction,
    createContext,
    useContext,
    useState,
} from 'react';

type SessionType = [
    { accessToken: string; refreshToken: string },
    Dispatch<SetStateAction<{ accessToken: string; refreshToken: string }>>,
];

const AppContext = createContext<SessionType>([
    { accessToken: '', refreshToken: '' },
    () => {},
]);

export const useAppContext = () => {
    const context = useContext(AppContext);

    if (!context) {
        throw new Error('Context error!');
    }

    return context;
};

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
