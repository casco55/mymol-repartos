import { AiOutlineCloseCircle } from 'react-icons/ai';
import { pathNameForDelivery, pathNameTekDelivery } from '../../../helpers/endPoints';
import { useRequestDetails } from '../hooks/useRequestDetails';
import { useTakeDelivery } from '../hooks/useTakeDelivery';

export const RequestModalDetail = ({
    id,
    idNotification,
    closeRequestModalDetail,
    listFn
}) => {
    const {
        requestDetails
    } = useRequestDetails(id, pathNameForDelivery);
    const { solicitud, detalles } = requestDetails;
    const { nombre_usuario, apellido_usuario, direccion, departamento, telefono_usuario, monto, monto_despacho, tipo_solicitud, nombre_forma_pago, estado_pago, estado_solicitud, comentarios, nombre_reparto_manual, apellido_reparto_manual, telefono_reparto_manual, direccion_restaurante, nombre_restaurante } = solicitud;
    const {
        takeDelivery
    } = useTakeDelivery(id, pathNameTekDelivery, closeRequestModalDetail, listFn);
    return (
        <>
            <div
                className="position-fixed top-0 bg-light overflow-y-auto pb-3 col-12"
                id={`requestModalDetail${id}`}
            >
                <div className="d-flex flex-row justify-content-end">
                    <AiOutlineCloseCircle className="cursor-pointer" size={48} onClick={() => closeRequestModalDetail()} />
                </div>
                <div className="d-flex flex-row py-3">
                    <h2 className="mx-auto">
                        Detalle de la solicitud {id}
                    </h2>
                </div>
                <div className="d-flex flex-row">
                    {/* detalles.length > 0 ?  classname col-6 : col-12 */}
                    <div
                        className={`d-flex flex-column ${detalles.length > 0 ? "col-6" : "col-12"}`}
                    >
                        <div className="d-flex flex-column">
                            <h3 className="mx-auto">Datos del Restaurante</h3>
                            <p className="ms-0">Restaurante: {nombre_restaurante}</p>
                            <p className="ms-0">Direccion:
                                <a href={`https://www.google.com/maps/search/?api=1&query=${direccion_restaurante}`} target="_blank" rel="noreferrer">
                                    {direccion_restaurante}
                                </a>
                            </p>
                        </div>
                        <div className="d-flex flex-column">
                            <h3 className="ms-0">Datos del cliente</h3>
                            <div className="d-flex flex-column">
                                {tipo_solicitud === "web" &&
                                    <p className="ms-0">
                                        Nombre: {nombre_usuario} {apellido_usuario}
                                    </p>
                                }
                                {tipo_solicitud === "manual" &&
                                    <p className="ms-0">
                                        Nombre: {nombre_reparto_manual} {apellido_reparto_manual}
                                    </p>
                                }
                                <p className="ms-0">Direccion:
                                    <a href={`https://www.google.com/maps/search/?api=1&query=${direccion}`} target="_blank" rel="noreferrer">
                                        {direccion}
                                    </a>
                                </p>
                                <p className="ms-0">Departamento: {departamento}</p>
                                {tipo_solicitud === "web" &&
                                    <p className="ms-0">Teléfono: {telefono_usuario}</p>
                                }
                                {tipo_solicitud === "manual" &&
                                    <p className="ms-0">Teléfono: {telefono_reparto_manual}</p>
                                }
                            </div>
                        </div>
                        <div className="d-flex flex-column">
                            <h3 className="ms-0">Datos de la solicitud</h3>
                            <div className="d-flex flex-column">
                                <p className="ms-0">Monto: {monto}</p>
                                <p className="ms-0">Monto de despacho: {monto_despacho}</p>
                                <p className="ms-0">Monto total: {monto_despacho + monto}</p>
                                <p className="ms-0">Tipo de solicitud: {tipo_solicitud}</p>
                                <p className="ms-0">Forma de pago: {nombre_forma_pago}</p>
                                <p className="ms-0">Estado de pago:
                                    {estado_pago === 0 && "pendiente"}
                                    {estado_pago === 1 && "pagado"}
                                </p>
                                <p className="ms-0">Estado de la solicitud: {estado_solicitud}</p>
                            </div>
                        </div>
                        <div className="d-flex flex-column">
                            <h3 className="ms-0">Comentarios</h3>
                            <div className="d-flex flex-column">
                                <p className="ms-0">{comentarios}</p>
                            </div>
                        </div>
                    </div>
                    {detalles.length > 0 &&
                        <div className="d-flex flex-column col-6">
                            <h3 className="ms-0">Detalles de la solicitud</h3>
                            <div className="d-flex flex-column">
                                {detalles.map((detalle, key) => (
                                    <div key={key} className="d-flex flex-column">
                                        <p className="ms-0">Producto: {detalle.nombre_producto}</p>
                                        <p className="ms-0">Cantidad: {detalle.cantidad}</p>
                                        <p className="ms-0">Precio: {detalle.precio}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    }
                </div>
                {id !== idNotification &&
                    <div className="d-flex flex-row justify-content-center">
                        <button
                            className="btn btn-primary"
                            onClick={() => takeDelivery()}
                        >
                            Tomar entrega
                        </button>
                    </div>
                }
            </div>
        </>
    )
}