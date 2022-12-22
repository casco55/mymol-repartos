import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { useNavBarStyle } from "../hooks/useNavBarStyle";

export const NavBar = () => {
    const {
        nombre,
        apellido,
        id_clasificacion,
        logOutFn
    } = useContext(UserContext);
    const {
        actualPath,
        onSelectItem
    } = useNavBarStyle();
    return (
        <>

            <div className="d-flex flex-row">
                <div
                    className={`col-4 d-flex justify-content-center border ${actualPath === '/' ? 'bg-dark text-light' : ''}`}
                    onClick={() => onSelectItem()}
                >
                    <NavLink className="d-flex flex-row nav-link" end to='/'>
                        Pedidos
                    </NavLink>
                </div>
                <div
                    className={`col-4 d-flex justify-content-center border ${actualPath === '/self_assigned' ? 'bg-dark text-light' : ''}`}
                    onClick={() => onSelectItem()}
                >
                    <NavLink className="d-flex flex-row nav-link" end to='/self_assigned'>
                        Mis repartos
                    </NavLink>
                </div>
                <div
                    className={`col-4 d-flex justify-content-center border ${actualPath === '/reportes' ? 'bg-dark text-light' : ''}`}
                    onClick={() => onSelectItem()}
                >
                    <NavLink className="d-flex flex-row nav-link" end to='/reportes'>
                        Reportes
                    </NavLink>
                </div>
            </div>

            <div className="g-0 mt-1 d-flex justify-content-end">
                <p className="me-2">
                    Bienvenido {nombre} {apellido}
                </p>
                <button
                    className="btn btn-outline-danger"
                    onClick={() => logOutFn()}
                >
                    Cerrar sesión
                </button>
            </div>

        </>
    )
}