import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export const NavBar = () => {
    const {
        nombre,
        apellido,
        nombre_restaurante,
        logOutFn
    } = useContext(UserContext);
}