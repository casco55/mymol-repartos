import axios from "axios"
import { URL_local } from "../../../helpers/endPoints"

export const deliveredFn = async (pathName, id, token) => {
    console.log(URL_local, pathName, id, token)
    try {
        const response = await axios.put(`${URL_local}${pathName}${id}`, {}, {
            headers: {
                'x-token': token
            }
        });
        if (response.status === 200) {
            return response.data;
        }
        return false;
    } catch (error) {
        console.log(error)
    }
}