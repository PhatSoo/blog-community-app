'use server';

import { PostAction } from '@/app/actions/post.action';
import PostTitle from '@/components/post/title.component';
import { Col, Row } from 'antd';

const PostDetails = async ({ params }: { params: { slug: string } }) => {
    const { slug } = params;

    const postDetails = await PostAction.getDetails(slug);
    const postComments = await PostAction.getComments(slug);

    return (
        <>
            <PostTitle
                title={postDetails.title}
                author={postDetails.createdBy.displayName}
                createdAt={postDetails.createdAt}
            />

            <Row justify={'space-around'} style={{ height: '100vh' }}>
                <Col span={16} style={{ backgroundColor: 'red' }}>
                    <div>Description: {postDetails.description}</div>
                    <div>Content: {postDetails.content}</div>
                </Col>

                <Col span={7} style={{ backgroundColor: 'green' }}>
                    {postComments}
                </Col>
            </Row>
        </>
    );
};

export default PostDetails;
