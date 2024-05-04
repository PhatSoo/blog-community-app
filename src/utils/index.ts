export const parseJwt = (token: string | undefined) => {
    if (!token) {
        return;
    }
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(atob(base64));
};

export const checkJwtExpired = (token: string | undefined) => {
    if (!token) {
        return true; // Token không tồn tại, coi như đã hết hạn
    }

    const decodedToken = parseJwt(token);
    if (!decodedToken || !decodedToken.exp) {
        return true; // Không thể giải mã token hoặc không có thông tin thời gian hết hạn, coi như đã hết hạn
    }

    const currentTime = Math.floor(Date.now() / 1000); // Thời gian hiện tại tính bằng giây
    return decodedToken.exp < currentTime;
};

export const convertDatetime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString('vi-VN');
};
