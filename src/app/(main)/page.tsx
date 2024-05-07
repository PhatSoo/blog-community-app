'use server';

import { PostAction } from '@/app/actions/post.action';
import Content from '@/components/content.component';

const Home = async ({ searchParams }: { searchParams: { sortBy: string } }) => {
    const sort = searchParams.sortBy ?? 'createdAt';

    const getPost = async () => {
        return await PostAction.listPost(sort);
    };

    const postData = await getPost();

    return (
        <>
            <Content data={postData} sort={sort} />
        </>
    );
};

export default Home;
