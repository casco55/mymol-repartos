import axios from "axios"
import { URL_local } from "../../../helpers/endPoints";

export const deliveredCancelFn = async (id, pathName, data, token) => {
    try {
        const response = await axios.put(`${URL_local}${pathName}${id}`, data, {
            headers: {
                'x-token': token
            }
        });
        if (response.status === 200) {
            return response.data;
        }
        return false;

    } catch (error) {
        console.log(error, "error")
        return false;
    }
}