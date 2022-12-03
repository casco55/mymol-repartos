import { useContext, useEffect } from "react";
import { useState } from "react";
import { UserContext } from "../context/UserContext";
import { URL_local } from "../helpers/endPoints";
import { getAllRequests } from "../services/getAllRequests";

export const useData = (pathName) => {
    const { token } = useContext(UserContext);
    const [data, setData] = useState([]);
    const dataList = async () => {
        const response = await getAllRequests(URL_local, pathName, token);
        if (response) {
            setData(response);
            return
        }
        setData(false);
    }
    useEffect(() => {
        if (token) {
            dataList();
        }
    }, [pathName, token])
    return {
        data,
        dataList
    }
}