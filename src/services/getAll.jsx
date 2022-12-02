import axios from "axios";

export const getAll = async (url, pathName, id, token, endPathName) => {

    try {
        const response = await axios.get(`${url}${pathName}${id}${endPathName}`,
            {
                headers: {
                    'x-token': token
                }
            });
        return response.data;
    } catch (error) {
        return false;
    }
}