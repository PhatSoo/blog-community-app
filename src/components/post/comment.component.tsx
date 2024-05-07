'use client';

import { SendOutlined } from '@ant-design/icons';
import {
    Button,
    Col,
    Divider,
    Flex,
    Form,
    Input,
    Row,
    Typography,
    message,
} from 'antd';
import { useState } from 'react';
import ListComments from '../comment/list.component';
import { useAppContext } from '@/providers/app.provider';
import { CommentAction } from '@/app/actions/comment.action';
import { CommentType } from '@/types';
import { useRouter } from 'next/navigation';

const { Text } = Typography;
const { TextArea } = Input;

interface IProps {
    comments: CommentType[] | [];
    slug: string;
}

const PostComment = ({ comments, slug }: IProps) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [form] = Form.useForm();
    const router = useRouter();

    const [session, setSession] = useAppContext();

    const isLogin = session.accessToken.length > 0;

    const onFinish = async (values: string) => {
        setLoading(true);

        const res = await CommentAction.create({
            message: values,
            slug,
        });

        if (!res.success) {
            message.error(res.message);
        }

        setTimeout(() => {
            setLoading(false);
            form.resetFields();
            router.refresh();
        }, 3000);
    };

    const PleaseLogin = () => {
        return (
            <Text strong disabled>
                Please login to use this feature....
            </Text>
        );
    };

    return (
        <Flex vertical style={{ height: '100%' }}>
            <Divider>Post Comments</Divider>

            <ListComments comments={comments} />

            <Divider />
            <Form layout="inline" onFinish={onFinish} form={form}>
                <Row
                    justify={'space-around'}
                    align={'middle'}
                    style={{
                        marginBottom: 20,
                        width: '100%',
                        height: '100%',
                    }}>
                    {isLogin ? (
                        <>
                            <Col span={24}>
                                <Form.Item name="message" required>
                                    <TextArea
                                        placeholder="Write what you want to say...."
                                        variant="filled"
                                        autoSize={{ maxRows: 4 }}
                                    />
                                </Form.Item>
                            </Col>
                            <Col>
                                <Form.Item>
                                    <Button
                                        type="primary"
                                        icon={<SendOutlined />}
                                        loading={loading}
                                        htmlType="submit">
                                        Send
                                    </Button>
                                </Form.Item>
                            </Col>
                        </>
                    ) : (
                        <PleaseLogin />
                    )}
                </Row>
            </Form>
        </Flex>
    );
};

export default PostComment;
