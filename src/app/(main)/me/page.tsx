import { AuthAction } from '@/app/actions/auth.action';
import ActivityManage from '@/components/me/activity.component';
import MenuHeader from '@/components/me/header.component';
import UserInfo from '@/components/me/info.component';
import PostManage from '@/components/me/post.component';

const Me = async ({ searchParams }: { searchParams: { tag: string } }) => {
    const tag = searchParams.tag ?? 'info';

    const { userInfo } = await AuthAction.me();

    return (
        <>
            <MenuHeader tag={tag} />

            {tag === 'info' ? (
                <UserInfo />
            ) : tag === 'post' ? (
                <PostManage />
            ) : (
                <ActivityManage />
            )}
        </>
    );
};

export default Me;
