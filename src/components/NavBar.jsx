import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { useNavBarStyle } from "../hooks/useNavBarStyle";

export const NavBar = () => {
  const { nombre, apellido, id_clasificacion, logOutFn } =
    useContext(UserContext);
  const { actualPath, onSelectItem } = useNavBarStyle();
  return (
    <>
      <div className="d-flex flex-row justify-content-between h-60">
        <div
          className={`col-4 d-flex justify-content-center border py-3 ${
            actualPath === "/"
              ? "text_mymol bg_mymol_header"
              : "bg_header_box_mymol text_mymol"
          }`}
          onClick={() => onSelectItem()}
        >
          <NavLink className="d-flex flex-row nav-link" end to="/">
            Pedidos
          </NavLink>
        </div>
        <div
          className={`col-4 d-flex justify-content-center border py-3 ${
            actualPath === "/self_assigned"
              ? "text_mymol bg_mymol_header"
              : "bg_header_box_mymol text_mymol"
          }`}
          onClick={() => onSelectItem()}
        >
          <NavLink className="d-flex flex-row nav-link" end to="/self_assigned">
            Mis repartos
          </NavLink>
        </div>
        <div
          className={`col-4 d-flex justify-content-center border py-3 ${
            actualPath === "/reportes"
              ? "text_mymol bg_mymol_header"
              : "bg_header_box_mymol text_mymol"
          }`}
          onClick={() => onSelectItem()}
        >
          <NavLink className="d-flex flex-row nav-link" end to="/reportes">
            Reportes
          </NavLink>
        </div>
      </div>
      <div className="g-0 d-flex flex-column bg_mymol mb-3">
        <p className="d-flex  text_mymol_dark mx-auto mb-2 mt-0">
          Bienvenido {nombre} {apellido}
        </p>
        <button
          className="btn bg_mymol_header text_mymol  mx-auto my-0"
          onClick={() => logOutFn()}
        >
          Cerrar sesión
        </button>
      </div>
    </>
  );
};
