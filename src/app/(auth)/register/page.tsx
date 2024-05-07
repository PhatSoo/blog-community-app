'use client';

import { Alert, Button, Form, Input, message } from 'antd';
import NextLink from 'next/link';
import { useState } from 'react';
import { Typography } from 'antd';
import { AuthAction } from '@/app/actions/auth.action';

const { Link } = Typography;

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
    },
};

const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};

const Register = () => {
    const [form] = Form.useForm();
    const [notify, setNotify] = useState({
        show: false,
        success: false,
        message: '',
    });

    const onFinish = async (data: any) => {
        const res = await AuthAction.register(data);

        const err = res.message ?? 'Đăng ký tài khoản thất bại!!';

        if (!res.success) {
            setNotify({ show: true, success: false, message: err });
            message.error(err);
            return;
        }

        setNotify({ show: true, success: true, message: err });
        return;
    };

    return (
        <Form
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={onFinish}
            initialValues={{
                residence: ['zhejiang', 'hangzhou', 'xihu'],
                prefix: '86',
            }}
            style={{
                padding: 100,
                border: '1px solid black',
                borderRadius: 20,
                backgroundColor: '#fff',
                width: 700,
            }}
            scrollToFirstError>
            <Form.Item
                name="email"
                label="E-mail"
                rules={[
                    {
                        type: 'email',
                        message: 'The input is not valid E-mail!',
                    },
                    {
                        required: true,
                        message: 'Please input your E-mail!',
                    },
                ]}>
                <Input />
            </Form.Item>

            <Form.Item
                name="password"
                label="Password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                    {
                        min: 3,
                        message: 'Password lenght is to short!',
                    },
                ]}
                hasFeedback>
                <Input.Password />
            </Form.Item>

            <Form.Item
                name="confirm"
                label="Confirm Password"
                dependencies={['password']}
                hasFeedback
                rules={[
                    {
                        required: true,
                        message: 'Please confirm your password!',
                    },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }
                            return Promise.reject(
                                new Error(
                                    'The new password that you entered do not match!',
                                ),
                            );
                        },
                    }),
                ]}>
                <Input.Password />
            </Form.Item>

            <Form.Item
                name="displayName"
                label="Display Name"
                tooltip="This name will show when you comment or post something..!"
                rules={[
                    {
                        required: true,
                        message: 'Please input your display name!',
                        whitespace: true,
                    },
                ]}>
                <Input />
            </Form.Item>

            {notify.show ? (
                <>
                    <Alert
                        type={notify.success ? 'success' : 'error'}
                        message={notify.message}
                        banner
                        style={{ marginBottom: 10 }}
                    />

                    {notify.success ? (
                        <Link href="/login">Go to login...</Link>
                    ) : (
                        ''
                    )}
                </>
            ) : (
                ''
            )}

            <Form.Item
                {...tailFormItemLayout}
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                }}>
                <Button type="primary" htmlType="submit" size="large">
                    Register
                </Button>
                <div style={{ textAlign: 'end' }}>
                    <NextLink href={'/login'}>Have an account ?</NextLink>
                </div>
            </Form.Item>
        </Form>
    );
};

export default Register;
