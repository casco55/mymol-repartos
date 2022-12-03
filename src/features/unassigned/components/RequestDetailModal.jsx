import { AiOutlineCloseCircle } from 'react-icons/ai';
import { pathNameUnassigned } from '../../../helpers/endPoints';
import { useRequestDetails } from '../hooks/useRequestDetails';
/* import { useRequestDetails } from '../hooks/useRequestDetails'; */

export const RequestModalDetail = ({
    id,
    closeRequestModalDetail
}) => {
    const {
        requestDetails
    } = useRequestDetails(id, pathNameUnassigned);
    const { solicitud, detalles } = requestDetails;
    const { nombre_usuario, apellido_usuario, direccion, departamento, telefono_usuario, monto, tipo_solicitud, nombre_forma_pago, estado_pago, estado_solicitud, comentarios, nombre_reparto_manual, apellido_reparto_manual, telefono_reparto_manual, direccion_restaurante, nombre_restaurante } = solicitud;
    return (
        <>
            <div className="position-absolute top-0 bg-light full-height col-12">
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
                            <p className="ms-0">Direccion: {direccion_restaurante}</p>
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
                                <p className="ms-0">Dirección: {direccion}</p>
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


            </div>
        </>
    )
}