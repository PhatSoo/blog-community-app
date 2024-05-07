'use client';

import { convertDatetime } from '@/utils';
import { Flex, Typography } from 'antd';

interface IProps {
    title: string;
    author: string;
    createdAt: string;
}

const PostTitle = ({ title, author, createdAt }: IProps) => {
    return (
        <div style={{ margin: '20px 10px' }}>
            <Flex justify="center" align="center" gap={10}>
                <Typography.Title level={2}>{title}</Typography.Title>
            </Flex>
            <div style={{ textAlign: 'end' }}>Author: {author}</div>
            <div style={{ textAlign: 'end' }}>
                Created at: {convertDatetime(createdAt)}
            </div>
        </div>
    );
};

export default PostTitle;
