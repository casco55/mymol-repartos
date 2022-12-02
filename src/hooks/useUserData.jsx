import { useEffect, useState } from "react";
import { userDataInitialState } from "../helpers/userDataInitialState";

export const useUserData = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [userData, setUserData] = useState(userDataInitialState);


    const loginFn = (data) => {
        setUserData({
            id_delivery_logged: data.id_delivery_logged,
            nombre: data.nombre,
            apellido: data.apellido,
            id_localidad: data.id_localidad,
            token: data.token
        });
        localStorage.setItem("userData", JSON.stringify({
            userDataData: {
                id_delivery_logged: data.id_delivery_logged,
                nombre: data.nombre,
                apellido: data.apellido,
                id_localidad: data.id_localidad,
                token: data.token
            }
        }));
        setIsLoggedIn(true);
        return;
    }
    const checkToken = () => {
        const userData = localStorage.getItem("userData");
        if (!userData) {
            setUserData({
                id_delivery_logged: "",
                nombre: "",
                apellido: "",
                token: ""
            });
            setIsLoggedIn(false);
            return
        }
        if (userData) {
            const userDataData = JSON.parse(userData).userDataData;
            setUserData({
                id_delivery_logged: userDataData.id_delivery_logged,
                nombre: userDataData.nombre,
                apellido: userDataData.apellido,
                id_localidad: userDataData.id_localidad,
                token: userDataData.token
            });
            setIsLoggedIn(true);
            return
        }
    }
    const logOutFn = () => {
        localStorage.removeItem("userData");
        setUserData(userDataInitialState);
        setIsLoggedIn(false);
        return;
    }
    useEffect(() => {
        checkToken();
    }, [])

    return {
        isLoggedIn,
        userData,
        loginFn,
        logOutFn
    }
}