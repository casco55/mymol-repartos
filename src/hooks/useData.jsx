import { useContext, useEffect } from "react";
import { useState } from "react";
import { UserContext } from "../context/UserContext";
import { URL_local } from "../helpers/endPoints";
import { getAllRequests } from "../services/getAllRequests";
import { useSocketNotification } from "./useSocketNotification";

export const useData = (pathName) => {
    const { token } = useContext(UserContext);
    const {
        notificationData
    } = useSocketNotification();
    const [data, setData] = useState([]);
    const [idNotification, setIdNotification] = useState(0);
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
    useEffect(() => {
        if (notificationData) {
            setIdNotification(notificationData.id_solicitud);
            dataList();
        }
    }, [notificationData])
    return {
        data,
        idNotification,
        dataList
    }
}