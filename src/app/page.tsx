'use server';

import { PostAction } from '@/app/actions/post.action';
import Content from '@/components/content.component';
import Filter from '@/components/filter.component';
import Header from '@/components/header/header.component';
import RefreshToken from '@/components/refresh.component';
import { AuthAction } from './actions/auth.action';

const Home = async () => {
    const postData = await PostAction.listPost();
    const userData = await AuthAction.me();

    return (
        <>
            <RefreshToken />

            <Header user={userData} />

            <Filter />

            <Content data={postData} />
        </>
    );
};

export default Home;
