import { CommentType } from '@/types';
import { Avatar, List } from 'antd';

interface IProps {
    comments: CommentType[] | [];
}

const ListComments = ({ comments }: IProps) => {
    return (
        <List
            style={{ flex: 1 }}
            itemLayout="horizontal"
            dataSource={comments}
            renderItem={(item, index) => (
                <List.Item>
                    <List.Item.Meta
                        avatar={
                            <Avatar
                                src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}
                            />
                        }
                        title={
                            <a href="https://ant.design">
                                {item.user.displayName}
                            </a>
                        }
                        description={item.message}
                    />
                </List.Item>
            )}
        />
    );
};

export default ListComments;
