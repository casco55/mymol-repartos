import axios from "axios";

export const postOne = async (url, pathName, data, token) => {
    try {
        const response = await axios.post(`${url}${pathName}`, data, {
            headers: {
                'x-token': token
            }
        });
        return response.data;

    } catch (error) {
        return false
    }

}