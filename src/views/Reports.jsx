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
      <div>
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
        <button onClick={getDeliveredReport} className="btn btn-primary">
          Entregados
        </button>
        <button onClick={getFailedReport} className="btn btn-primary">
          Fallidos
        </button>
      </div>
      {data && data.length > 0 && (
        <CSVLink
          data={data}
          headers={headers}
          filename={`reporte_${reportType}.csv`}
          className="btn btn-primary"
          separator=";"
          target="_blank"
        >
          Descargar {reportType}
        </CSVLink>
      )}
    </>
  );
};
