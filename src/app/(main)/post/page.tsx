'use client';

import { PostAction } from '@/app/actions/post.action';
import { Breadcrumb, Button, Form, Input, message } from 'antd';
import { useForm } from 'antd/es/form/Form';

const TITLE_LENGTH = 50;
const DESCRIPTION_LENGTH = 100;

const Post = () => {
    const [form] = useForm();

    const onFinish = async (value: any) => {
        const res = await PostAction.create(value);

        if (res.statusCode === 201) {
            form.resetFields();
            message.success(res.message);
            return;
        }

        message.error(res.message);
    };
    return (
        <div style={{ margin: 10 }}>
            <Breadcrumb
                items={[
                    {
                        title: <a href="/">Home</a>,
                    },
                    {
                        title: 'Post',
                    },
                ]}
            />

            <Form onFinish={onFinish} form={form}>
                <Form.Item
                    label="Title"
                    name="title"
                    rules={[
                        {
                            required: true,
                            message: 'Please input!',
                            max: TITLE_LENGTH,
                        },
                    ]}>
                    <Input showCount maxLength={TITLE_LENGTH} />
                </Form.Item>

                <Form.Item
                    label="Description"
                    name="description"
                    rules={[
                        {
                            required: true,
                            message: 'Please input!',
                            max: DESCRIPTION_LENGTH,
                        },
                    ]}>
                    <Input showCount maxLength={DESCRIPTION_LENGTH} />
                </Form.Item>

                <Form.Item
                    label="Content"
                    name="content"
                    rules={[{ required: true, message: 'Please input!' }]}>
                    <Input.TextArea showCount autoSize={{ minRows: 4 }} />
                </Form.Item>

                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Post;
