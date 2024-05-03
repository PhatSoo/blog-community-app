'use client';

import React, { useState } from 'react';
import { Table } from 'antd';
import type { TableProps } from 'antd';
import { PostType, UserType } from '@/types';
import { useRouter } from 'next/navigation';

interface IProps {
    data: PostType[] | [];
}

const Content = ({ data }: IProps) => {
    const PAGESIZE = 10;
    const [filterData, setFilterData] = useState<PostType[]>(
        data.slice(0, PAGESIZE),
    );
    const router = useRouter();

    const columns: TableProps<PostType>['columns'] = [
        {
            title: 'Post title',
            dataIndex: 'title',
            key: 'title',
            render: (title, record) => (
                <a onClick={() => handlePostClick(record.slug)}>{title}</a>
            ),
        },

        {
            title: 'Post description',
            dataIndex: 'description',
            key: 'description',
        },

        {
            title: 'Created by',
            dataIndex: 'createdBy',
            key: 'createdBy',
            render: (user: UserType) => <a>{user.displayName}</a>,
        },

        {
            title: 'Views',
            dataIndex: 'views',
            key: 'views',
        },

        {
            title: 'Interactives',
            dataIndex: 'interactives',
            key: 'interactives',
        },

        {
            title: 'Created at',
            dataIndex: 'createdAt',
            key: 'createdAt',
        },
    ];

    const handlePostClick = (slug: string) => {
        router.push(`post/${slug}`);
    };

    const handleOnchange = (page: number, pageSize: number) => {
        const offset = (page - 1) * pageSize;

        const newData = data.slice(offset, pageSize * page);

        setFilterData(newData);
    };

    return (
        <Table
            style={{ padding: '0px 50px' }}
            bordered
            size="large"
            sticky
            columns={columns}
            rowKey={'slug'}
            dataSource={filterData}
            pagination={{
                defaultCurrent: 1,
                total: data.length,
                pageSize: PAGESIZE,
                onChange: handleOnchange,
            }}
        />
    );
};

export default Content;
