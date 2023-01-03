import { ImExit } from "react-icons/im";
import {
  pathNameForDelivery,
  pathNameTekDelivery,
} from "../../../helpers/endPoints";
import { useRequestDetails } from "../hooks/useRequestDetails";
import { useTakeDelivery } from "../hooks/useTakeDelivery";

export const RequestModalDetail = ({
  id,
  idNotification,
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
  const { takeDelivery } = useTakeDelivery(
    id,
    pathNameTekDelivery,
    closeRequestModalDetail,
    listFn
  );
  return (
    <>
      <div
        className="position-fixed top-0 bg-light overflow-y-auto pb-3 col-12"
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
                <p className="ms-0">Restaurante: {nombre_restaurante}</p>
                <p className="ms-0">
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
              <div className="d-flex flex-column bg_white detail_section_shadow p-3 border rounded-4 my-2">
                <h5 className="ms-0 text_mymol_orange">Datos del cliente</h5>
                <div className="d-flex flex-column">
                  {tipo_solicitud === "web" && (
                    <p className="ms-0">
                      Nombre: {nombre_usuario} {apellido_usuario}
                    </p>
                  )}
                  {tipo_solicitud === "manual" && (
                    <p className="ms-0">
                      Nombre: {nombre_reparto_manual} {apellido_reparto_manual}
                    </p>
                  )}
                  <p className="ms-0">
                    Direccion:
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${direccion}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {direccion}
                    </a>
                  </p>
                  <p className="ms-0">Departamento: {departamento}</p>
                  {tipo_solicitud === "web" && (
                    <p className="ms-0">Teléfono: {telefono_usuario}</p>
                  )}
                  {tipo_solicitud === "manual" && (
                    <p className="ms-0">Teléfono: {telefono_reparto_manual}</p>
                  )}
                </div>
              </div>
              <div className="d-flex flex-column bg_white detail_section_shadow p-3 border rounded-4 my-2">
                <h5 className="ms-0 text_mymol_orange">
                  Datos de la solicitud
                </h5>
                <div className="d-flex flex-column">
                  <p className="ms-0">
                    Monto: ${new Intl.NumberFormat().format(monto)}
                  </p>
                  <p className="ms-0">
                    Monto de despacho: $
                    {new Intl.NumberFormat().format(monto_despacho)}
                  </p>
                  <p className="ms-0">
                    Monto total: $
                    {new Intl.NumberFormat().format(monto_despacho + monto)}
                  </p>
                  <p className="ms-0">Tipo de solicitud: {tipo_solicitud}</p>
                  <p className="ms-0">Forma de pago: {nombre_forma_pago}</p>
                  <p className="ms-0">
                    Estado de pago:
                    {estado_pago === 0 && "pendiente"}
                    {estado_pago === 1 && "pagado"}
                  </p>
                  <p className="ms-0">
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
                  <p className="ms-0">{comentarios}</p>
                </div>
              </div>
            </div>
          </div>
          {id !== idNotification && (
            <div className="d-flex flex-row justify-content-center">
              <button
                className="btn btn-primary"
                onClick={() => takeDelivery()}
              >
                Tomar entrega
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
