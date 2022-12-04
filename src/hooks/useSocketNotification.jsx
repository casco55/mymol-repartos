import { useContext, useState } from "react";
import io from "socket.io-client";
import { UserContext } from "../context/UserContext";
import { URL_local } from "../helpers/endPoints";

export const useSocketNotification = () => {
    const { id_clasificacion, id_localidad } = useContext(UserContext);
    const [notificationData, setNotificationData] = useState(null);
    const socket = io(URL_local);
    socket.on(`postDeliveryMymMolClasificacion${id_clasificacion}Localidad${id_localidad}`, (data) => {
        console.log(data);
        setNotificationData(data);
    });
    return {
        notificationData
    };
}