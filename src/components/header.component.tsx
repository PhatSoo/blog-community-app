'use client';

import { BellTwoTone } from '@ant-design/icons';
import { Button, Col, Divider, Image, Row, Space } from 'antd';
import Input, { SearchProps } from 'antd/es/input';

const { Search } = Input;

const Header = () => {
  const onSearch: SearchProps['onSearch'] = (value, _e, info) =>
    console.log(info?.source, value);

  return (
    <Row align={'middle'} gutter={16}>
      <Col span={2}>
        <Image src="icon.png" width={'100%'} />
      </Col>
      <Col span={18}>
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
          <Col span={6} style={{ textAlign: 'end' }}>
            <BellTwoTone style={{ fontSize: 16 }} />
          </Col>
        </Row>
      </Col>
      <Col span={4}>
        <Space split={<Divider type="vertical" />}>
          <Button>Register now !</Button>
          <Button type="primary">Login</Button>
        </Space>
      </Col>
    </Row>
  );
};

export default Header;
