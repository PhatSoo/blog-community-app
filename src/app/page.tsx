'use server';

import { PostAction } from '@/app/actions/post.action';
import Content from '@/components/content.component';
import Header from '@/components/header/header.component';
import RefreshToken from '@/components/refresh.component';
import { AuthAction } from './actions/auth.action';

const Home = async ({ searchParams }: { searchParams: { sortBy: string } }) => {
    const sort = searchParams.sortBy ?? 'createdAt';

    const getPost = async () => {
        return await PostAction.listPost(sort);
    };

    const postData = await getPost();
    const userData = await AuthAction.me();

    return (
        <>
            <RefreshToken />

            <Header user={userData} />

            <Content data={postData} sort={sort} />
        </>
    );
};

export default Home;
