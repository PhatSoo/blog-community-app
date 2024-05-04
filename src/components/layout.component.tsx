import { AntdRegistry } from '@ant-design/nextjs-registry';
import RefreshToken from './refresh.component';
import Header from './header/header.component';
import { AuthAction } from '@/app/actions/auth.action';
import AppProvider from '@/providers/app.provider';

const Layout = async ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    const userData = await AuthAction.me();

    return (
        <AppProvider>
            <AntdRegistry>
                <RefreshToken /> {/* Refresh token after 10m  */}
                <Header user={userData} />
                {children}
            </AntdRegistry>
        </AppProvider>
    );
};

export default Layout;
