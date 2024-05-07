import { useAppContext } from '@/providers/app.provider';
import Header from './header/header.component';
import { AuthAction } from '@/app/actions/auth.action';

const Layout = async ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    const userData = await AuthAction.me();

    return (
        <>
            <Header user={userData} />
            {children}
        </>
    );
};

export default Layout;
