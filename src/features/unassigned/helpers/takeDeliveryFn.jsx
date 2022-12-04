import axios from "axios";
import { URL_local } from "../../../helpers/endPoints";

export const takeDeliveryFn = async (pathName, token, data) => {
    try {
        const response = await axios.post(`${URL_local}${pathName}`, data, {
            headers: {
                'x-token': token
            }
        });
        console.log(response);
        if (response.status === 200) {
            return response.data;
        }
        return false;

    } catch (error) {
        return false;
    }
}