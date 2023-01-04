import axios from "axios";
import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { UserContext } from "../context/UserContext";
import { URL_local } from "../helpers/endPoints";

export const useFormReport = () => {
  const { token } = useContext(UserContext);
  const initialFormState = {
    fecha_inicio: "",
    fecha_termino: "",
  };
  const [values, setValues] = useState(initialFormState);
  const [data, setData] = useState([]);
  const [headers, setHeaders] = useState([]);
  const [reportType, setReportType] = useState("");
  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const getDeliveredReport = async () => {
    if (!formValidation()) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Debes llenar todos los campos",
      });
    }
    try {
      const response = await axios.get(
        `${URL_local}/repartos/reportes/${values.fecha_inicio}/${values.fecha_termino}`,
        {
          headers: {
            "x-token": token,
          },
        }
      );
      setData(response.data.rows);
      setHeaders(response.data.headers);
      setReportType("entregados");
      console.log(response);
    } catch (error) {
      if (error.response.status === 400) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "No hay datos para mostrar",
        });
        return;
      }
    }
  };
  const formValidation = () => {
    const inputFechaInicio = document.getElementById("fecha_inicio");
    const inputFechaTermino = document.getElementById("fecha_termino");
    if (values.fecha_inicio === "" || values.fecha_termino === "") {
      values.fecha_inicio === ""
        ? inputFechaInicio.classList.add("is-invalid")
        : inputFechaInicio.classList.remove("is-invalid");
      values.fecha_termino === ""
        ? inputFechaTermino.classList.add("is-invalid")
        : inputFechaTermino.classList.remove("is-invalid");

      return false;
    }
    inputFechaInicio.classList.remove("is-invalid");
    inputFechaTermino.classList.remove("is-invalid");
    return true;
  };

  const getFailedReport = async () => {
    if (!formValidation()) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Debes llenar todos los campos",
      });
    }
    try {
      const response = await axios.get(
        `${URL_local}/cancelados/reportes/${values.fecha_inicio}/${values.fecha_termino}`,
        {
          headers: {
            "x-token": token,
          },
        }
      );
      if (response.status === 400) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "No hay datos para mostrar",
        });
        return;
      }
      setData(response.data.rows);
      setHeaders(response.data.headers);
      setReportType("cancelados");
      console.log(response);
    } catch (error) {
      if (error.response.status === 400) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "No hay datos para mostrar",
        });
        return;
      }
    }
  };

  return {
    values,
    data,
    headers,
    reportType,
    handleChange,
    getDeliveredReport,
    getFailedReport,
  };
};
