import { useEffect, useState } from "react";
import { userDataInitialState } from "../helpers/userDataInitialState";

export const useUserData = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [userData, setUserData] = useState(userDataInitialState);

  const loginFn = (data) => {
    setUserData({
      id_delivery_logged: data.id_delivery_logged,
      nombre: data.nombre,
      apellido: data.apellido,
      id_localidad: data.id_localidad,
      nombre_localidad: data.nombre_localidad,
      id_clasificacion: data.id_clasificacion,
      nombre_clasificacion: data.nombre_clasificacion,
      token: data.token,
    });
    localStorage.setItem(
      "userDeliveryData",
      JSON.stringify({
        userDataData: {
          id_delivery_logged: data.id_delivery_logged,
          nombre: data.nombre,
          apellido: data.apellido,
          id_localidad: data.id_localidad,
          nombre_localidad: data.nombre_localidad,
          id_clasificacion: data.id_clasificacion,
          nombre_clasificacion: data.nombre_clasificacion,
          token: data.token,
        },
      })
    );
    setIsLoggedIn(true);
    return;
  };
  const checkToken = () => {
    const userData = localStorage.getItem("userDeliveryData");
    if (!userData) {
      setUserData({
        id_delivery_logged: "",
        nombre: "",
        apellido: "",
        id_localidad: "",
        nombre_localidad: "",
        id_clasificacion: "",
        nombre_clasificacion: "",
        token: "",
      });
      setIsLoggedIn(false);
      return;
    }
    if (userData) {
      const userDataData = JSON.parse(userData).userDataData;
      setUserData({
        id_delivery_logged: userDataData.id_delivery_logged,
        nombre: userDataData.nombre,
        apellido: userDataData.apellido,
        id_localidad: userDataData.id_localidad,
        nombre_localidad: userDataData.nombre_localidad,
        id_clasificacion: userDataData.id_clasificacion,
        nombre_clasificacion: userDataData.nombre_clasificacion,
        token: userDataData.token,
      });
      setIsLoggedIn(true);
      return;
    }
  };
  const logOutFn = () => {
    localStorage.removeItem("userDeliveryData");
    setUserData(userDataInitialState);
    setIsLoggedIn(false);
    return;
  };
  useEffect(() => {
    checkToken();
  }, []);

  return {
    isLoggedIn,
    userData,
    loginFn,
    logOutFn,
  };
};
