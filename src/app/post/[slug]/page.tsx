'use server';

const PostDetails = async ({ params }: { params: { slug: string } }) => {
    return (
        <>
            <div>hello world: {params.slug}</div>
        </>
    );
};

export default PostDetails;
