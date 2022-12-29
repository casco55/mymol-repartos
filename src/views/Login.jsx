import React, { useContext } from "react";
import { PassInput } from "../components/formComponents/PassInput";
import { TextInput } from "../components/formComponents/TextInput";
import { UserContext } from "../context/UserContext";
import { loginFormValidation } from "../features/login/helpers/loginFormValidation";
import { useLogin } from "../features/login/hooks/useLogin";
import { pathNameLogin } from "../helpers/endPoints";



export const Login = () => {
    const userData = useContext(UserContext);
    const { loginFn } = userData;

    const {
        loginData,
        handleInputChange,
        handleSubmit
    } = useLogin(pathNameLogin, loginFormValidation, loginFn)
    const { correo, clave } = loginData;


    return (
        <>
            <div className="container-fluid mt-3">

                <div className="container">
                    <div className="row d-flex flex-column justify-content-center">
                        <h1 className="text-center">Repartos</h1>
                    </div>
                    <hr />
                </div>
                <div className="container mt-5">
                    <div className="row d-flex flex-column">
                        <div className="col-lg-8 mx-auto d-flex flex-column pb-5 contenedor-login">
                            <h3 className="text-center mt-3 mb-3 titulo-login">Login</h3>

                            <div className="input-group col-lg-10 mx-auto my-3">
                                <TextInput
                                    label="Correo"
                                    name="correo"
                                    placeholder="Correo"
                                    value={correo}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="input-group col-lg-10 mx-auto my-3">
                                <PassInput
                                    label="Contraseña"
                                    name="clave"
                                    placeholder="Contraseña"
                                    value={clave}
                                    onChange={handleInputChange}
                                />

                            </div>
                            <div className="input-group col-lg-10 mx-auto my-3">
                                <button
                                    className="btn btn-primary w-100"
                                    onClick={handleSubmit}
                                >
                                    Ingresar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}