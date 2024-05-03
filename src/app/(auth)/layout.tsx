import { Flex } from 'antd';

export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <Flex
            justify="center"
            align="center"
            style={{
                backgroundColor: '#f0f0f0',
                height: '100vh',
            }}>
            {children}
        </Flex>
    );
}
