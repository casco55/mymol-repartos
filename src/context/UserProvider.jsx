import { memo } from "react";
import { useUserData } from "../hooks/useUserData";
import { UserContext } from "./UserContext"

export const UserProvider = memo(({ children }) => {
    const { userData, isLoggedIn, loginFn, logOutFn } = useUserData();
    const {
        id_delivery_logged,
        nombre,
        apellido,
        id_localidad,
        nombre_localidad,
        id_clasificacion,
        nombre_clasificacion,
        token
    } = userData;
    return (
        <UserContext.Provider value={{
            id_delivery_logged,
            isLoggedIn,
            nombre,
            apellido,
            id_localidad,
            nombre_localidad,
            id_clasificacion,
            nombre_clasificacion,
            token,
            loginFn,
            logOutFn
        }}>
            {children}
        </UserContext.Provider >
    )
})