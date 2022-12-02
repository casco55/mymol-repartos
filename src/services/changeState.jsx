import axios from "axios";

export const changeState = async (url, pathName, id, state, token) => {

    try {
        const value = {
            estado: !state
        }
        const response = await axios.patch(`${url}${pathName}${id}`, value, {
            headers: {
                'x-token': token
            }
        });
        return response.data;
    } catch (error) {
        return false;
    }
}