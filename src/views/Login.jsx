import React, { useContext } from "react";
import { HiOutlineUserCircle } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import { UserContext } from "../context/UserContext";
import { loginFormValidation } from "../features/login/helpers/loginFormValidation";
import { useLogin } from "../features/login/hooks/useLogin";
import { pathNameLogin } from "../helpers/endPoints";

export const Login = () => {
  const userData = useContext(UserContext);
  const { loginFn } = userData;

  const { loginData, handleInputChange, handleSubmit } = useLogin(
    pathNameLogin,
    loginFormValidation,
    loginFn
  );
  const { correo, clave } = loginData;

  return (
    <>
      <div className="position-relative col-12 d-flex flex-column justify-content-center align-items-center">
        <img
          src="https://imgs-mymol.jrdesarrollos.cl/imagenes/admin_login_bg.png"
          className="img_cover_login"
          alt="..."
        />
        <div className="over_img_absolute d-flex flex-column justify-content-center align-items-center g-0 ">
          <div className="display-flex-column col-10 bg_mymol rounded-5 login_shadow">
            <div className="bg-white rounded-5">
              <img
                src="https://imgs-mymol.jrdesarrollos.cl/imagenes/mymol_admin_logo.png"
                alt="Logo"
                className="img_cover"
              />
            </div>
            <div className="d-flex flex-column col-10 mx-auto mt-5 pb-5">
              <form className="d-flex flex-column">
                <div className="col-10 mx-auto d-flex flex-column">
                  <div className="position-relative">
                    <HiOutlineUserCircle
                      size={25}
                      className="position-absolute top-50 start-0 translate-middle-y ms-3 text_mymol_orange"
                    />
                    <input
                      type="text"
                      className="col-12 border_x_circle border-0 px-5 h_3rem"
                      id="correo"
                      name="correo"
                      placeholder="Correo"
                      value={correo}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="col-10 mx-auto d-flex flex-column mt-3">
                  <div className="position-relative">
                    <RiLockPasswordLine
                      size={25}
                      className="position-absolute top-50 start-0 translate-middle-y ms-3 text_mymol_orange"
                    />
                    <input
                      type="password"
                      className="col-12 border_x_circle border-0 px-5 h_3rem text_mymol_dark"
                      id="clave"
                      name="clave"
                      placeholder="Contraseña"
                      value={clave}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="col-10 mx-auto d-flex flex-column mt-4">
                  <button
                    className="bg_login_button w-100 border-0 h_3rem rounded-5 text_mymol"
                    onClick={handleSubmit}
                  >
                    Ingresar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
