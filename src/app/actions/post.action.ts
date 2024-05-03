import { fetchWithoutAuth } from '@/configs';
import { DataResponse, PostType } from '@/types';

const listPost = async (): Promise<PostType[] | []> => {
    const res: DataResponse<PostType> = await fetchWithoutAuth('post');

    if (res.statusCode === 200) {
        return res.data;
    }

    return [];
};

export const PostAction = {
    listPost,
};
