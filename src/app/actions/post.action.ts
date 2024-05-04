import { fetchWithoutAuth } from '@/configs';
import { DataResponse, InfoResponse, PostType } from '@/types';

const listPost = async (sort: string): Promise<PostType[] | []> => {
    const res: DataResponse<PostType> = await fetchWithoutAuth(
        `post?sortBy=${sort}`,
        {
            cache: 'no-cache',
        },
    );

    if (res.statusCode === 200) {
        return res.data;
    }

    return [];
};

const getDetails = async (slug: string) => {
    const res: InfoResponse<PostType> = await fetchWithoutAuth(`post/${slug}`);

    return res.data;
};

const getComments = async (slug: string) => {
    const res = await fetchWithoutAuth(`post/${slug}/comment`);

    return res.data;
};

export const PostAction = {
    listPost,
    getDetails,
    getComments,
};
