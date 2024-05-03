import { UserType } from '@/types';
import { LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Dropdown, MenuProps, Space, Typography } from 'antd';
const { Text } = Typography;

interface IProps {
    user: UserType;
}

const items: MenuProps['items'] = [
    {
        label: '1st menu item',
        key: '1',
        icon: <UserOutlined />,
    },
    {
        label: '2nd menu item',
        key: '2',
        icon: <UserOutlined />,
    },
    {
        label: 'Logout',
        key: 'logout',
        icon: <LogoutOutlined />,
        danger: true,
    },
];

const UserGroup = ({ user }: IProps) => {
    const handleMenuClick: MenuProps['onClick'] = (e) => {
        console.log('click', e);
    };

    const menuProps = {
        items,
        onClick: handleMenuClick,
    };

    return (
        <Space>
            {user ? <Text code>Hello, {user.displayName}</Text> : ''}
            <Dropdown menu={menuProps} placement="bottomRight" arrow>
                <Avatar
                    style={{ backgroundColor: '#87d068' }}
                    icon={<UserOutlined />}
                />
            </Dropdown>
        </Space>
    );
};

export default UserGroup;
