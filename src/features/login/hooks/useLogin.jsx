import { useState } from "react";
import Swal from "sweetalert2";
import { URL_local } from "../../../helpers/endPoints";
import { loginUser } from "../services/loginUser";

export const useLogin = (pathNameLogin, loginFormValidation, loginFn) => {
    const [loginData, setLoginData] = useState({
        correo: "",
        clave: ""
    });

    const handleInputChange = ({ target }) => {
        setLoginData({
            ...loginData,
            [target.name]: target.value
        })
    }
    const postLogin = async () => {
        const response = await loginUser(URL_local, pathNameLogin, loginData);
        console.log(response)
        if (response.internalStatus === 200) {
            loginFn(response.data);
            return
        }
        if (response.internalStatus === 201) {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: response.data.message,
                confirmButtonText: "Aceptar"
            })
            return
        }
        Swal.fire({
            icon: "error",
            title: "Error",
            text: "Error en el servidor",
            confirmButtonText: "Aceptar"
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const validation = loginFormValidation(loginData);
        if (!validation) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please fill all the fields',
                confirmButtonText: "Ok"
            })
            return;
        }
        postLogin();
    }

    return {
        loginData,
        handleInputChange,
        handleSubmit
    }
}