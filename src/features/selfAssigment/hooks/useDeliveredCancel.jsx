import { useState } from "react";
import { useContext } from "react";
import Swal from "sweetalert2";
import { UserContext } from "../../../context/UserContext";
import { deliveredCancelFn } from "../helpers/deliveredCancelFn";

export const useDeliveredCancel = (id, pathName, closeModalFn, listFn) => {
    const { token } = useContext(UserContext);
    const [comentario, setComentario] = useState('');
    const [displayConfirmationCancel, setDisplayConfirmationCancel] = useState(false);

    const handleDisplayConfirmationCancel = () => {
        setDisplayConfirmationCancel(true);
    }
    const handleCloseConfirmationCancel = () => {
        setDisplayConfirmationCancel(false);
    }
    const handleInputChange = ({ target }) => {
        setComentario(target.value);
    }
    const handleDeliveredCancel = async () => {
        const data = {
            comentario
        }
        const response = await deliveredCancelFn(id, pathName, data, token);
        console.log(response)
        if (response.internalStatus === 200) {
            Swal.fire({
                icon: 'success',
                title: '¡Pedido cancelado!',
                text: 'El pedido se ha cancelado correctamente',
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
            text: 'No se ha podido cancelar el pedido',
            showConfirmButton: false,
        });

    }
    return {
        comentario,
        displayConfirmationCancel,
        handleDisplayConfirmationCancel,
        handleCloseConfirmationCancel,
        handleInputChange,
        handleDeliveredCancel
    }


}