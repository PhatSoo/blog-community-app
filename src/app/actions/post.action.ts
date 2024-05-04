import { fetchWithoutAuth } from '@/configs';
import { DataResponse, PostType } from '@/types';

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

export const PostAction = {
    listPost,
};
