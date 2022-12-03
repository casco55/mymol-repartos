import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../context/UserContext";
import { URL_local } from "../../../helpers/endPoints";

export const useRequestDetails = (id, pathName) => {
    const initialState = {
        solicitud: {
            id: 0,
            monto: 0,
            monto_despacho: 0,
            nombre_restaurante: "",
            direccion_restaurante: "",
            direccion: "",
            departamento: "",
            estado_pago: 0,
            estado_solicitud: "",
            nombre_forma_pago: "",
            nombre_usuario: "",
            apellido_usuario: "",
            telefono_usuario: "",
            tipo_solicitud: "",
            comentarios: "",
            nombre_reparto_manual: "",
            apellido_reparto_manual: "",
            telefono_reparto_manual: "",
        },
        detalles: [],
    }
    const { token } = useContext(UserContext);
    const [requestDetails, setRequestDetails] = useState(initialState);

    const getRequestDetails = async () => {
        try {
            const response = await axios.get(`${URL_local}${pathName}${id}`, {
                headers: {
                    'x-token': token
                }
            });
            setRequestDetails(response.data);
        } catch (error) {
            setRequestDetails({});
        }
    }

    useEffect(() => {
        getRequestDetails();
    }, [id]);

    return {
        requestDetails
    }

}