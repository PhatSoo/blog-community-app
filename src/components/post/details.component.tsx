import { Col, Divider, Flex } from 'antd';

interface IProps {
    description: string;
    content: string;
}

const Details = ({ description, content }: IProps) => {
    return (
        <Flex vertical gap={10}>
            <Divider orientation="left">Description</Divider>
            <div>{description}</div>

            <Divider>Content</Divider>
            <div>{content} </div>
        </Flex>
    );
};

export default Details;
