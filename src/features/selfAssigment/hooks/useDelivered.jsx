import { useState } from "react";
import { useContext } from "react";
import Swal from "sweetalert2";
import { UserContext } from "../../../context/UserContext";
import { deliveredFn } from "../helpers/deliveredFn";

export const useDelivered = (id, pathName, closeModalFn, listFn) => {
    const { token } = useContext(UserContext);
    const [displayConfirmation, setDisplayConfirmation] = useState(false);

    const handleDisplayConfirmation = () => {
        setDisplayConfirmation(true);
    }
    const handleCloseConfirmation = () => {
        setDisplayConfirmation(false);
    }
    const handleDelivered = async () => {
        const response = await deliveredFn(pathName, id, token);
        if (response.internalStatus === 200) {
            Swal.fire({
                icon: 'success',
                title: '¡Pedido entregado!',
                text: 'El pedido se ha entregado correctamente',
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
            text: 'No se ha podido entregar el pedido',
            showConfirmButton: false,
        });
    }
    return {
        displayConfirmation,
        handleDisplayConfirmation,
        handleCloseConfirmation,
        handleDelivered
    }
}