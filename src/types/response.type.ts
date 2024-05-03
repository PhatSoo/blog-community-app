export type ActionResponse = {
    message?: string;
    success: boolean;
};

export type ResponseType = {
    message: string;
    statusCode: number;
};

export interface TokenResponse extends ResponseType {
    data: {
        accessToken: string;
        refreshToken: string;
    };
}

export interface InfoResponse<T> extends ResponseType {
    data: T;
}

export interface DataResponse<T> extends ResponseType {
    data: T[] | [];
}
