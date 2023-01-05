import { AiOutlineCloseCircle } from "react-icons/ai";
import {
  pathNameCancelaEntrega,
  pathNameEntrega,
  pathNameForDelivery,
} from "../../../helpers/endPoints";
import { useRequestDetails } from "../../unassigned/hooks/useRequestDetails";
import { useDelivered } from "../hooks/useDelivered";
import { useDeliveredCancel } from "../hooks/useDeliveredCancel";
import { ImExit } from "react-icons/im";

export const RequestModalDetailSelfAssigned = ({
  id,
  closeRequestModalDetail,
  listFn,
}) => {
  const { requestDetails } = useRequestDetails(id, pathNameForDelivery);
  const { solicitud, detalles } = requestDetails;
  const {
    nombre_usuario,
    apellido_usuario,
    direccion,
    departamento,
    telefono_usuario,
    monto,
    monto_despacho,
    tipo_solicitud,
    nombre_forma_pago,
    estado_pago,
    estado_solicitud,
    comentarios,
    nombre_reparto_manual,
    apellido_reparto_manual,
    telefono_reparto_manual,
    direccion_restaurante,
    nombre_restaurante,
  } = solicitud;
  const {
    displayConfirmation,
    handleDisplayConfirmation,
    handleCloseConfirmation,
    handleDelivered,
  } = useDelivered(id, pathNameEntrega, closeRequestModalDetail, listFn);
  const {
    comentario,
    displayConfirmationCancel,
    handleDisplayConfirmationCancel,
    handleCloseConfirmationCancel,
    handleInputChange,
    handleDeliveredCancel,
  } = useDeliveredCancel(
    id,
    pathNameCancelaEntrega,
    closeRequestModalDetail,
    listFn
  );

  return (
    <>
      <div
        className="position-fixed top-0 overflow-y-auto pb-3 bg-light col-12"
        id={`requestModalDetail${id}`}
      >
        <div className="col-12 d-flex flex-column bg_mymol_header py-3">
          <div className="d-flex flex-row justify-content-between col-11 mx-auto">
            <div className="d-flex flex-row my-auto">
              <h2 className="mx-auto text_mymol">
                Detalle de la solicitud {id}
              </h2>
            </div>
            <ImExit
              className="cursor-pointer my-auto"
              size={48}
              onClick={() => closeRequestModalDetail()}
            />
          </div>
        </div>
        <div className="d-flex flex-column col-12">
          <div className="d-flex flex-column">
            <div className="d-flex flex-column col-11 mx-auto justify-content-around py-3">
              <div className="d-flex flex-column bg_white detail_section_shadow p-3 border rounded-4">
                <h5 className="ms-0 text_mymol_orange">
                  Datos del Restaurante
                </h5>
                <div className="d-flex flex-column text_mymol_dark">
                  <p className="ms-0 my-1 font_15">
                    Restaurante: {nombre_restaurante}
                  </p>
                  <p className="ms-0 my-1">
                    Direccion:
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${direccion_restaurante}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {direccion_restaurante}
                    </a>
                  </p>
                </div>
              </div>
              <div className="d-flex flex-column bg_white detail_section_shadow p-3 border rounded-4 my-2">
                <h5 className="ms-0 text_mymol_orange">Datos del cliente</h5>
                <div className="d-flex flex-column text_mymol_dark">
                  {tipo_solicitud === "web" && (
                    <p className="ms-0 my-1">
                      Nombre: {nombre_usuario} {apellido_usuario}
                    </p>
                  )}
                  {tipo_solicitud === "manual" && (
                    <p className="ms-0 my-1">
                      Nombre: {nombre_reparto_manual} {apellido_reparto_manual}
                    </p>
                  )}
                  <p className="ms-0 my-1">
                    Direccion:
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${direccion}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {direccion}
                    </a>
                  </p>
                  <p className="ms-0 my-1">Departamento: {departamento}</p>
                  {tipo_solicitud === "web" && (
                    <p className="ms-0 my-1">Teléfono: {telefono_usuario}</p>
                  )}
                  {tipo_solicitud === "manual" && (
                    <p className="ms-0 my-1">
                      Teléfono: {telefono_reparto_manual}
                    </p>
                  )}
                </div>
              </div>
              <div className="d-flex flex-column bg_white detail_section_shadow p-3 border rounded-4 my-2">
                <h5 className="ms-0 text_mymol_orange">
                  Datos de la solicitud
                </h5>
                <div className="d-flex flex-column">
                  <p className="ms-0 my-1">
                    Monto: ${new Intl.NumberFormat().format(monto)}
                  </p>
                  <p className="ms-0 my-1">
                    Monto de despacho: $
                    {new Intl.NumberFormat().format(monto_despacho)}
                  </p>
                  <p className="ms-0 my-1">
                    Monto total: $
                    {new Intl.NumberFormat().format(monto_despacho + monto)}
                  </p>
                  <p className="ms-0 my-1">
                    Tipo de solicitud: {tipo_solicitud}
                  </p>
                  <p className="ms-0 my-1">
                    Forma de pago: {nombre_forma_pago}
                  </p>
                  <p className="ms-0 my-1">
                    Estado de pago:
                    {estado_pago === 0 && "pendiente"}
                    {estado_pago === 1 && "pagado"}
                  </p>
                  <p className="ms-0 my-1">
                    Estado de la solicitud: {estado_solicitud}
                  </p>
                </div>
              </div>
              {detalles.length > 0 && (
                <div className="d-flex flex-column bg_white detail_section_shadow p-3 border rounded-4 my-2">
                  <h5 className="ms-0 text_mymol_orange">
                    Detalles de la solicitud
                  </h5>
                  <div className="d-flex flex-column">
                    <table className="table table-striped table-hover table-bordered table-sm text_mymol_dark">
                      <thead>
                        <tr>
                          <th scope="col">Producto</th>
                          <th scope="col">Cantidad</th>
                          <th scope="col">Precio</th>
                        </tr>
                      </thead>
                      <tbody>
                        {detalles.map((detalle, key) => (
                          <tr key={key}>
                            <td>{detalle.nombre_producto}</td>
                            <td>{detalle.cantidad}</td>
                            <td>{detalle.precio}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
              <div className="d-flex flex-column bg_white detail_section_shadow p-3 border rounded-4 my-2">
                <h5 className="ms-0 text_mymol_orange">Comentarios</h5>
                <div className="d-flex flex-column">
                  <p className="ms-0 my-1">{comentarios}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex flex-row">
            <button
              className="btn btn-primary mx-auto"
              onClick={() => handleDisplayConfirmation()}
            >
              Entregado
            </button>
            <button
              className="btn btn-danger mx-auto"
              onClick={() => handleDisplayConfirmationCancel()}
            >
              Cancelar
            </button>
          </div>
        </div>
        {displayConfirmation && (
          <div className="position-fixed top-0 d-flex flex-column bg-light full-height col-12 z-index-20">
            <div className="d-flex flex-row justify-content-end">
              <AiOutlineCloseCircle
                className="cursor-pointer"
                size={48}
                onClick={() => handleCloseConfirmation()}
              />
            </div>
            <div className="d-flex flex-row py-3">
              <h2 className="mx-auto">
                ¿Está seguro que desea marcar como entregado?
              </h2>
            </div>
            <div className="d-flex flex-row">
              <button
                className="btn btn-primary mx-auto"
                onClick={() => handleDelivered()}
              >
                Si
              </button>
              <button
                className="btn btn-danger mx-auto"
                onClick={() => handleCloseConfirmation()}
              >
                No
              </button>
            </div>
          </div>
        )}
        {displayConfirmationCancel && (
          <div className="position-fixed top-0 d-flex flex-column bg-light full-height col-12 z-index-20">
            <div className="d-flex flex-row justify-content-end">
              <AiOutlineCloseCircle
                className="cursor-pointer"
                size={48}
                onClick={() => handleCloseConfirmationCancel()}
              />
            </div>
            <div className="d-flex flex-row py-3">
              <h2 className="mx-auto">
                ¿Está seguro que desea cancelar la solicitud?
              </h2>
            </div>
            {/* comentario cancelar text area */}
            <div className="d-flex flex-column">
              <label htmlFor="comentario_cancelar">Comentario</label>
              <textarea
                className="form-control"
                id="comentario"
                rows="3"
                value={comentario}
                onChange={handleInputChange}
              />
            </div>
            <div className="d-flex flex-row">
              <button
                className="btn btn-primary mx-auto"
                onClick={() => handleDeliveredCancel()}
              >
                Si
              </button>
              <button
                className="btn btn-danger mx-auto"
                onClick={() => handleCloseConfirmationCancel()}
              >
                No
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
