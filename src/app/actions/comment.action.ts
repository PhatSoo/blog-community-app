import { fetchWithAuth, fetchWithoutAuth } from '@/configs';
import {
    ActionResponse,
    CommentType,
    DataResponse,
    InfoResponse,
} from '@/types';

const list = async (slug: string): Promise<CommentType[] | []> => {
    const res: DataResponse<CommentType> = await fetchWithoutAuth(
        `comment/${slug}`,
    );

    return res.data;
};

const create = async ({
    message,
    slug,
}: {
    message: string;
    slug: string;
}): Promise<ActionResponse> => {
    const res: InfoResponse<CommentType> = await fetchWithAuth(
        `comment/${slug}`,
        {
            method: 'POST',
        },
        message,
    );

    if (res.statusCode !== 201) {
        return { success: false, message: res.message };
    }
    return { success: true };
};

export const CommentAction = {
    list,
    create,
};
