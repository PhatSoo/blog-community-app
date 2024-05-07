'use client';

import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import type { TableProps } from 'antd';
import { PostType, UserType } from '@/types';
import { useRouter } from 'next/navigation';
import Filter from './filter.component';
import { convertDatetime } from '@/utils';

interface IProps {
    data: [] | PostType[];
    sort: string;
}

const PAGESIZE = 10;

const Content = ({ data, sort }: IProps) => {
    const router = useRouter();
    const [filter, setFilter] = useState<string>(sort);

    const handleChangeFilter = (key: string) => {
        setFilter(key);

        if (key === 'createdAt') {
            return router.push('/');
        }
        return router.push(`?sortBy=${key}`);
    };

    const [filterData, setFilterData] = useState<PostType[] | []>([]);

    useEffect(() => {
        const newData = data.slice(0, PAGESIZE);
        setFilterData(newData);
    }, [filter, data]);

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
            title: 'Likes',
            dataIndex: 'likes',
            key: 'likes',
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
            render: (value) => convertDatetime(value),
        },
    ];

    const handlePostClick = (slug: string) => {
        return router.push(`post/${slug}`);
    };

    const handleOnchange = (page: number, pageSize: number) => {
        const offset = (page - 1) * pageSize;
        const newData = data.slice(offset, pageSize * page);
        setFilterData(newData);
    };

    return (
        <>
            <Filter filter={filter} changeFilter={handleChangeFilter} />

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
        </>
    );
};

export default Content;
