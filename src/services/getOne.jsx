import axios from "axios";

export const getOne = async (url, pathName, id, token) => {
    try {
        const response = await axios.get(`${url}${pathName}${id}`, {
            headers: {
                'x-token': token
            }
        });
        if (response.status === 200) {
            return response.data;
        }
    } catch (error) {
        console.log(error);
        return false;
    }
}
