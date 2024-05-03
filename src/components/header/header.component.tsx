'use client';

import { UserLogin } from '@/types';
import { Button, Col, Divider, Image, Row, Space } from 'antd';
import Input, { SearchProps } from 'antd/es/input';
import UserGroup from './userGroup.compoent';

const { Search } = Input;

interface IProps {
    user: UserLogin;
}

const Header = ({ user }: IProps) => {
    const onSearch: SearchProps['onSearch'] = (value, _e, info) =>
        console.log(info?.source, value);

    const LoginGroup = () => {
        return (
            <Space>
                <Button href="/register">Register now !</Button>
                <Button href="/login" type="primary">
                    Login
                </Button>
            </Space>
        );
    };

    return (
        <Row align="middle" style={{ borderBottom: '1px solid #c3c3c3' }}>
            <Col span={2}>
                <Image src="icon.png" width={'100%'} />
            </Col>
            <Col span={18} style={{ paddingLeft: 50 }}>
                <Row
                    align={'middle'}
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}>
                    <Col span={12}>
                        <Search
                            placeholder="Input search text"
                            allowClear
                            enterButton="Search"
                            size="large"
                            onSearch={onSearch}
                        />
                    </Col>
                </Row>
            </Col>
            <Col
                span={4}
                style={{
                    textAlign: 'end',
                    paddingRight: 10,
                }}>
                <Space split={<Divider type="vertical" />}>
                    {user.isLogin && user.userInfo ? (
                        <UserGroup user={user.userInfo} />
                    ) : (
                        <LoginGroup />
                    )}
                </Space>
            </Col>
        </Row>
    );
};

export default Header;
