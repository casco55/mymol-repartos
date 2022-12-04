
import { useContext } from "react";
import Swal from "sweetalert2";
import { UserContext } from "../../../context/UserContext";
import { takeDeliveryFn } from "../helpers/takeDeliveryFn";

export const useTakeDelivery = (id, pathName, closeModalFn, listFn) => {
    const {
        token,
        id_clasificacion,
        id_localidad
    } = useContext(UserContext);

    const takeDelivery = async () => {
        const data = {
            id_solicitud: id,
            id_clasificacion,
            id_localidad
        }
        const response = await takeDeliveryFn(pathName, token, data);
        if (response.internalStatus === 200) {
            Swal.fire({
                icon: 'success',
                title: '¡Pedido tomado!',
                text: 'El pedido se ha tomado correctamente',
                showConfirmButton: false,
            });
            listFn();
            closeModalFn();
            return;
        }
        if (response.internalStatus === 400) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: response.message,
                confirmButtonText: "Ok"
            });
            return;
        }
        if (response.internalStatus === 500) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: response.message,
                confirmButtonText: "Ok"
            });
            return;
        }
        Swal.fire({
            icon: 'error',
            title: '¡Error!',
            text: 'No se ha podido tomar el pedido',
            showConfirmButton: false,
        });

    }
    return {
        takeDelivery
    }
}