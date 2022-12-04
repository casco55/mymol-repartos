import axios from "axios";

export const getAllRequests = async (url, pathName, token) => {
    try {
        const response = await axios.get(`${url}${pathName}`,
            {
                headers: {
                    'x-token': token
                }
            });
        console.log(response);
        return response.data;
    } catch (error) {
        return false;
    }
}