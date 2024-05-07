import { Col } from 'antd';

interface IProps {
    children: React.ReactNode;
    span: number;
}

const ContentCol = ({ span, children }: IProps) => {
    return (
        <Col
            span={span}
            style={{
                overflow: 'auto',
                border: '2px solid #000',
                borderRadius: 20,
                margin: '10px 0',
                padding: '0 10px',
            }}>
            {children}
        </Col>
    );
};

export default ContentCol;
