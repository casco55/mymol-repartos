import { CSVLink } from "react-csv";
import { useFormReport } from "../hooks/useFormReport";

export const Reports = () => {
  const {
    data,
    headers,
    values,
    reportType,
    handleChange,
    getDeliveredReport,
    getFailedReport,
  } = useFormReport();
  console.log(headers);
  const { fecha_inicio, fecha_termino } = values;

  return (
    <>
      {/* formulario fecha inicio fecha termino */}
      <div className="col-11 mx-auto">
        <div className="form-group">
          <label htmlFor="fechaInicio">Fecha Inicio</label>
          <input
            type="date"
            className="form-control"
            id="fecha_inicio"
            name="fecha_inicio"
            value={fecha_inicio}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="fechaTermino">Fecha Termino</label>
          <input
            type="date"
            className="form-control"
            id="fecha_termino"
            name="fecha_termino"
            value={fecha_termino}
            onChange={handleChange}
          />
        </div>
        <div className="col-12 mx-auto d-flex flex-row justify-content-around mt-5">
          <button
            onClick={getDeliveredReport}
            className="btn bg_mymol_header text_mymol"
          >
            Entregados
          </button>
          <button onClick={getFailedReport} className="btn btn-danger">
            Fallidos
          </button>
        </div>
      </div>
      {data && data.length > 0 && (
        <>
          <div className="col-11 mx-auto d-flex flex-row justify-content-center">
            <CSVLink
              data={data}
              headers={headers}
              filename={`reporte_${reportType}.csv`}
              className="btn btn-success mt-5 mx-auto"
              separator=";"
              target="_blank"
            >
              Descargar {reportType}
            </CSVLink>
          </div>
        </>
      )}
    </>
  );
};
