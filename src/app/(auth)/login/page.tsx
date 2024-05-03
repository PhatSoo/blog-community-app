'use client';

import { AuthAction } from '@/app/actions/auth.action';
import { AppContext } from '@/providers/app.provider';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Alert, Button, Checkbox, Flex, Form, Input, message } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useContext, useState } from 'react';

const Login = () => {
    const [error, setError] = useState('');
    const router = useRouter();
    const [session, setSession] = useContext(AppContext);

    const onFinish = async (data: any) => {
        const res = await AuthAction.login(data);

        if (!res.success) {
            const err = res.message ?? 'Something went wrong';
            message.error(err);
            setError(err);
            return;
        }

        if (res.token) {
            setSession(res.token);
        }

        return router.push('/');
    };

    return (
        <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            style={{
                padding: 100,
                width: '30%',
                border: '1px solid black',
                borderRadius: 30,
                backgroundColor: '#fff',
            }}>
            <Form.Item
                name="email"
                rules={[
                    { required: true, message: 'Please input your Email!' },
                ]}
                initialValue="user@user.user">
                <Input
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="Email"
                />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[
                    { required: true, message: 'Please input your Password!' },
                ]}
                initialValue="user">
                <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                />
            </Form.Item>
            <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <a className="login-form-forgot" href="">
                    Forgot password
                </a>
            </Form.Item>

            {error ? (
                <Alert
                    type="error"
                    message={error}
                    banner
                    style={{ marginBottom: 10 }}
                />
            ) : (
                ''
            )}

            <Form.Item>
                <Flex vertical gap={10} justify="center" align="end">
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="login-form-button"
                        style={{ width: '100%' }}>
                        Log in
                    </Button>
                    <div>
                        Or <Link href="/register">register now!</Link>
                    </div>
                </Flex>
            </Form.Item>
        </Form>
    );
};

export default Login;
