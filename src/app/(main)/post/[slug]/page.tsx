'use server';

import { CommentAction } from '@/app/actions/comment.action';
import { PostAction } from '@/app/actions/post.action';
import PostComment from '@/components/post/comment.component';
import ContentCol from '@/components/post/contentCol.component';
import Details from '@/components/post/details.component';
import PostTitle from '@/components/post/title.component';
import { Breadcrumb, Row } from 'antd';

const PostDetails = async ({ params }: { params: { slug: string } }) => {
    const { slug } = params;

    const postDetails = await PostAction.getDetails(slug);
    const postComments = await CommentAction.list(slug);

    return (
        <div style={{ margin: '0 5px' }}>
            <Breadcrumb
                items={[
                    {
                        title: <a href="/">Home</a>,
                    },
                    {
                        title: 'Post',
                    },
                    {
                        title: `${slug}`,
                    },
                ]}
            />

            <PostTitle
                title={postDetails.title}
                author={postDetails.createdBy.displayName}
                createdAt={postDetails.createdAt}
            />

            <Row justify={'space-around'} style={{ height: '100vh' }}>
                <ContentCol span={16}>
                    <Details
                        description={postDetails.description}
                        content={postDetails.content}
                    />
                </ContentCol>

                <ContentCol span={7}>
                    <PostComment slug={slug} comments={postComments} />
                </ContentCol>
            </Row>
        </div>
    );
};

export default PostDetails;
