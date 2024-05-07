'use client';
import {
    EyeOutlined,
    FieldTimeOutlined,
    FireOutlined,
    LikeOutlined,
} from '@ant-design/icons';
import { Col, Menu, MenuProps, Row, Typography } from 'antd';
const { Text } = Typography;

interface IProps {
    filter: string;
    changeFilter: (key: string) => void;
}

const items: MenuProps['items'] = [
    {
        label: 'Newest',
        key: 'createdAt',
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
        label: 'Most interactives',
        key: 'interactives',
        icon: <FireOutlined />,
    },
];

const Filter = ({ filter, changeFilter }: IProps) => {
    const onClick: MenuProps['onClick'] = (e) => {
        changeFilter(e.key);
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
                    selectedKeys={[filter]}
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
