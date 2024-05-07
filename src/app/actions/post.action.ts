import { fetchWithAuth, fetchWithoutAuth } from '@/configs';
import { DataResponse, InfoResponse, PostType, ResponseType } from '@/types';

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

const create = async (data: any) => {
    const res: ResponseType = await fetchWithAuth(
        'post',
        { method: 'POST' },
        data,
    );

    return res;
};

export const PostAction = {
    listPost,
    getDetails,
    create,
};
