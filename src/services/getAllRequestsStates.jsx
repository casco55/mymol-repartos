import axios from "axios";

export const getAllRequestsStates = async (url, pathName, token) => {

    try {
        const response = await axios.get(`${url}${pathName}`,
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