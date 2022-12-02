import axios from "axios";

export const putOne = async (url, pathName, id, data, token) => {
    try {
        const response = await axios.put(`${url}${pathName}${id}`, data, {
            headers: {
                'x-token': token
            }
        });
        return response.data;
    } catch (error) {
        return false;
    }
}