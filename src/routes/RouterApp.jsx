import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { AppRouter } from "./AppRouter";

export const RouterApp = () => {
    const { isLoggedIn } = useContext(UserContext);
    console.log(isLoggedIn);

    return (
        <>
            <AppRouter isLoggedIn={isLoggedIn} />
        </>
    )
}