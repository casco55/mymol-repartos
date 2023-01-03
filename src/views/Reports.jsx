import { pathNameReportesEntregados } from "../helpers/endPoints";
import { useData } from "../hooks/useData";

export const Reports = () => {
  const { data: dataReportesEntregados } = useData(pathNameReportesEntregados);
  return (
    <>
      <h1>Reports</h1>
    </>
  );
};
