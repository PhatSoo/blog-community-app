'use client';

import React, { useEffect, useState } from 'react';
import { Space, Table, Tag } from 'antd';
import type { TableProps } from 'antd';

interface DataType {
  id: number;
  title: string;
  description: string;
  createdBy: string;
  views: number;
  activities: number;
  createdAt: string;
}

const columns: TableProps<DataType>['columns'] = [
  {
    title: 'Post title',
    dataIndex: 'title',
    key: 'title',
    render: (text) => <a>{text}</a>,
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
  },

  {
    title: 'Views',
    dataIndex: 'views',
    key: 'views',
  },

  {
    title: 'Activities',
    dataIndex: 'activities',
    key: 'activities',
  },

  {
    title: 'Created at',
    dataIndex: 'createdAt',
    key: 'createdAt',
  },
];

const data: DataType[] = [
  {
    id: 1,
    title: 'Tiêu đề bài đăng 1',
    description: 'Mô tả bài đăng 1',
    createdBy: 'Người tạo bài đăng 1',
    views: 100,
    activities: 20,
    createdAt: '2024-04-15T16:55:00+07:00',
  },
  {
    id: 2,
    title: 'Tiêu đề bài đăng 2',
    description: 'Mô tả bài đăng 2',
    createdBy: 'Người tạo bài đăng 2',
    views: 50,
    activities: 15,
    createdAt: '2024-04-14T10:20:00+07:00',
  },
  {
    id: 3,
    title: 'Tiêu đề bài đăng 3',
    description: 'Mô tả bài đăng 3',
    createdBy: 'Người tạo bài đăng 3',
    views: 20,
    activities: 10,
    createdAt: '2024-04-13T14:30:00+07:00',
  },
  {
    id: 4,
    title: 'Tiêu đề bài đăng 4',
    description: 'Mô tả bài đăng 4',
    createdBy: 'Người tạo bài đăng 4',
    views: 35,
    activities: 7,
    createdAt: '2024-04-12T18:10:00+07:00',
  },
  {
    id: 5,
    title: 'Tiêu đề bài đăng 5',
    description: 'Mô tả bài đăng 5',
    createdBy: 'Người tạo bài đăng 5',
    views: 12,
    activities: 4,
    createdAt: '2024-04-11T12:25:00+07:00',
  },
  {
    id: 6,
    title: 'Tiêu đề bài đăng 6',
    description: 'Mô tả bài đăng 6',
    createdBy: 'Người tạo bài đăng 6',
    views: 80,
    activities: 32,
    createdAt: '2024-04-10T09:40:00+07:00',
  },
  {
    id: 7,
    title: 'Tiêu đề bài đăng 7',
    description: 'Mô tả bài đăng 7',
    createdBy: 'Người tạo bài đăng 7',
    views: 18,
    activities: 6,
    createdAt: '2024-04-09T16:00:00+07:00',
  },
  {
    id: 8,
    title: 'Tiêu đề bài đăng 8',
    description: 'Mô tả bài đăng 8',
    createdBy: 'Người tạo bài đăng 8',
    views: 42,
    activities: 14,
    createdAt: '2024-04-08T11:30:00+07:00',
  },
  {
    id: 9,
    title: 'Tiêu đề bài đăng 9',
    description: 'Mô tả bài đăng 9',
    createdBy: 'Người tạo bài đăng 9',
    views: 67,
    activities: 23,
    createdAt: '2024-04-07T08:55:00+07:00',
  },
  {
    id: 10,
    title: 'Tiêu đề bài đăng 10',
    description: 'Mô tả bài đăng 10',
    createdBy: 'Người tạo bài đăng 10',
    views: 95,
    activities: 11,
    createdAt: '2024-04-06T15:20:00+07:00',
  },
  {
    id: 11,
    title: 'Tiêu đề bài đăng 11',
    description: 'Mô tả bài đăng 11',
    createdBy: 'Người tạo bài đăng 11',
    views: 100,
    activities: 20,
    createdAt: '2024-04-15T16:55:00+07:00',
  },
  {
    id: 12,
    title: 'Tiêu đề bài đăng 12',
    description: 'Mô tả bài đăng 12',
    createdBy: 'Người tạo bài đăng 12',
    views: 50,
    activities: 15,
    createdAt: '2024-04-14T10:20:00+07:00',
  },
  {
    id: 13,
    title: 'Tiêu đề bài đăng 13',
    description: 'Mô tả bài đăng 13',
    createdBy: 'Người tạo bài đăng 13',
    views: 20,
    activities: 10,
    createdAt: '2024-04-13T14:30:00+07:00',
  },
  {
    id: 14,
    title: 'Tiêu đề bài đăng 14',
    description: 'Mô tả bài đăng 14',
    createdBy: 'Người tạo bài đăng 14',
    views: 35,
    activities: 7,
    createdAt: '2024-04-12T18:10:00+07:00',
  },
  {
    id: 15,
    title: 'Tiêu đề bài đăng 15',
    description: 'Mô tả bài đăng 15',
    createdBy: 'Người tạo bài đăng 15',
    views: 12,
    activities: 4,
    createdAt: '2024-04-11T12:25:00+07:00',
  },
  {
    id: 16,
    title: 'Tiêu đề bài đăng 16',
    description: 'Mô tả bài đăng 16',
    createdBy: 'Người tạo bài đăng 16',
    views: 80,
    activities: 32,
    createdAt: '2024-04-10T09:40:00+07:00',
  },
  {
    id: 17,
    title: 'Tiêu đề bài đăng 17',
    description: 'Mô tả bài đăng 17',
    createdBy: 'Người tạo bài đăng 17',
    views: 18,
    activities: 6,
    createdAt: '2024-04-09T16:00:00+07:00',
  },
  {
    id: 18,
    title: 'Tiêu đề bài đăng 18',
    description: 'Mô tả bài đăng 18',
    createdBy: 'Người tạo bài đăng 18',
    views: 42,
    activities: 14,
    createdAt: '2024-04-08T11:30:00+07:00',
  },
  {
    id: 19,
    title: 'Tiêu đề bài đăng 19',
    description: 'Mô tả bài đăng 19',
    createdBy: 'Người tạo bài đăng 19',
    views: 67,
    activities: 23,
    createdAt: '2024-04-07T08:55:00+07:00',
  },
  {
    id: 20,
    title: 'Tiêu đề bài đăng 20',
    description: 'Mô tả bài đăng 20',
    createdBy: 'Người tạo bài đăng 20',
    views: 95,
    activities: 11,
    createdAt: '2024-04-06T15:20:00+07:00',
  },
  {
    id: 21,
    title: 'Tiêu đề bài đăng 21',
    description: 'Mô tả bài đăng 21',
    createdBy: 'Người tạo bài đăng 21',
    views: 42,
    activities: 14,
    createdAt: '2024-04-08T11:30:00+07:00',
  },
  {
    id: 22,
    title: 'Tiêu đề bài đăng 22',
    description: 'Mô tả bài đăng 22',
    createdBy: 'Người tạo bài đăng 22',
    views: 67,
    activities: 23,
    createdAt: '2024-04-07T08:55:00+07:00',
  },
  {
    id: 23,
    title: 'Tiêu đề bài đăng 23',
    description: 'Mô tả bài đăng 23',
    createdBy: 'Người tạo bài đăng 23',
    views: 95,
    activities: 11,
    createdAt: '2024-04-06T15:20:00+07:00',
  },
  {
    id: 24,
    title: 'Tiêu đề bài đăng 24',
    description: 'Mô tả bài đăng 24',
    createdBy: 'Người tạo bài đăng 24',
    views: 100,
    activities: 20,
    createdAt: '2024-04-15T16:55:00+07:00',
  },
  {
    id: 25,
    title: 'Tiêu đề bài đăng 25',
    description: 'Mô tả bài đăng 25',
    createdBy: 'Người tạo bài đăng 25',
    views: 50,
    activities: 15,
    createdAt: '2024-04-14T10:20:00+07:00',
  },
  {
    id: 26,
    title: 'Tiêu đề bài đăng 26',
    description: 'Mô tả bài đăng 26',
    createdBy: 'Người tạo bài đăng 26',
    views: 20,
    activities: 10,
    createdAt: '2024-04-13T14:30:00+07:00',
  },
  {
    id: 27,
    title: 'Tiêu đề bài đăng 27',
    description: 'Mô tả bài đăng 27',
    createdBy: 'Người tạo bài đăng 27',
    views: 35,
    activities: 7,
    createdAt: '2024-04-12T18:10:00+07:00',
  },
  {
    id: 28,
    title: 'Tiêu đề bài đăng 28',
    description: 'Mô tả bài đăng 28',
    createdBy: 'Người tạo bài đăng 28',
    views: 12,
    activities: 4,
    createdAt: '2024-04-11T12:25:00+07:00',
  },
  {
    id: 29,
    title: 'Tiêu đề bài đăng 29',
    description: 'Mô tả bài đăng 29',
    createdBy: 'Người tạo bài đăng 29',
    views: 80,
    activities: 32,
    createdAt: '2024-04-10T09:40:00+07:00',
  },
  {
    id: 30,
    title: 'Tiêu đề bài đăng 30',
    description: 'Mô tả bài đăng 30',
    createdBy: 'Người tạo bài đăng 30',
    views: 18,
    activities: 6,
    createdAt: '2024-04-09T16:00:00+07:00',
  },
  {
    id: 31,
    title: 'Tiêu đề bài đăng 31',
    description: 'Mô tả bài đăng 31',
    createdBy: 'Người tạo bài đăng 31',
    views: 42,
    activities: 14,
    createdAt: '2024-04-08T11:30:00+07:00',
  },
  {
    id: 32,
    title: 'Tiêu đề bài đăng 32',
    description: 'Mô tả bài đăng 32',
    createdBy: 'Người tạo bài đăng 32',
    views: 67,
    activities: 23,
    createdAt: '2024-04-07T08:55:00+07:00',
  },
  {
    id: 33,
    title: 'Tiêu đề bài đăng 33',
    description: 'Mô tả bài đăng 33',
    createdBy: 'Người tạo bài đăng 33',
    views: 95,
    activities: 11,
    createdAt: '2024-04-06T15:20:00+07:00',
  },
];

const Content = () => {
  const PAGESIZE = 10;
  const [filterData, setFilterData] = useState<DataType[]>(
    data.slice(0, PAGESIZE),
  );

  const handleOnchange = (page: number, pageSize: number) => {
    const offset = (page - 1) * pageSize;

    const newData = data.slice(offset, pageSize * page);

    setFilterData(newData);
  };

  return (
    <Table
      bordered
      size="large"
      sticky
      columns={columns}
      rowKey={'id'}
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
