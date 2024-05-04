export type PostType = {
    _id: string;
    title: string;
    description: string;
    createdBy: UserType;
    views: number;
    activities: number;
    createdAt: string;
    slug: string;
    content: string;
};

export type UserType = {
    _id: string;
    email: string;
    displayName: string;
    isAdmin: string;
};

export type UserLogin = {
    isLogin: boolean;
    userInfo?: UserType;
};
