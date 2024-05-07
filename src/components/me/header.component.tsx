'use client';

import {
    AppstoreOutlined,
    MailOutlined,
    SettingOutlined,
} from '@ant-design/icons';
import { Menu, MenuProps } from 'antd';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface IProps {
    tag: string;
}

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
    {
        label: 'User info',
        key: 'info',
        icon: <MailOutlined />,
    },
    {
        label: 'Posts management',
        key: 'post',
        icon: <AppstoreOutlined />,
    },
    {
        label: 'Activities',
        key: 'activities',
        icon: <SettingOutlined />,
    },
];

const MenuHeader = ({ tag }: IProps) => {
    const [current, setCurrent] = useState(tag);
    const router = useRouter();

    const onClick: MenuProps['onClick'] = (e) => {
        setCurrent(e.key);

        if (e.key === 'info') {
            return router.push('/me');
        }

        return router.push(`?tag=${e.key}`);
    };
    return (
        <Menu
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={items}
        />
    );
};

export default MenuHeader;
