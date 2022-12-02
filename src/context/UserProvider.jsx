import { memo } from "react";
import { useUserData } from "../hooks/useUserData";
import { UserContext } from "./UserContext"

export const UserProvider = memo(({ children }) => {
    const { userData, isLoggedIn, loginFn, logOutFn } = useUserData();
    const { id_delivery_logged, nombre, apellido, id_localidad, token } = userData;
    return (
        <UserContext.Provider value={{
            id_delivery_logged,
            isLoggedIn,
            nombre,
            apellido,
            id_localidad,
            token,
            loginFn,
            logOutFn
        }}>
            {children}
        </UserContext.Provider >
    )
})