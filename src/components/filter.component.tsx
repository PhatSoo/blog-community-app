'use client';
import {
    EyeOutlined,
    FieldTimeOutlined,
    FireOutlined,
    LikeOutlined,
} from '@ant-design/icons';
import { Col, Menu, MenuProps, Row, Typography } from 'antd';

const { Text } = Typography;

import { useState } from 'react';

const items: MenuProps['items'] = [
    {
        label: 'Newest',
        key: 'new',
        icon: <FieldTimeOutlined />,
    },
    {
        label: 'Most views',
        key: 'views',
        icon: <EyeOutlined />,
    },
    {
        label: 'Most likes',
        key: 'likes',
        icon: <LikeOutlined />,
    },
    {
        label: 'Most interactive',
        key: 'interac',
        icon: <FireOutlined />,
    },
];

const Filter = () => {
    const [current, setCurrent] = useState('new');

    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    return (
        <Row align={'middle'} style={{ padding: 20 }}>
            <Col span={2}>
                <Text keyboard strong type="secondary" style={{ fontSize: 20 }}>
                    Filter
                </Text>
            </Col>
            <Col span={20}>
                <Menu
                    onClick={onClick}
                    selectedKeys={[current]}
                    mode="horizontal"
                    items={items}
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                />
            </Col>
        </Row>
    );
};

export default Filter;
