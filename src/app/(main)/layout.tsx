import Layout from '@/components/layout.component';
import RefreshToken from '@/components/refresh.component';

const MainLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <Layout>
            <RefreshToken /> {/* Refresh token after 10m  */}
            {children}
        </Layout>
    );
};

export default MainLayout;
