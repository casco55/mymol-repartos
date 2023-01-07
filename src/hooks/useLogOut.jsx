import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

export const useLogOut = () => {
  const { logOutFn } = useContext(UserContext);

  const [displayLogOutConfirmation, setDisplayLogOutConfirmation] =
    useState(false);

  const handleShowLogOutConfirmation = () => {
    setDisplayLogOutConfirmation(true);
  };
  const handleCloseLogOutConfirmation = () => {
    setDisplayLogOutConfirmation(false);
  };
  const handleLogOut = () => {
    logOutFn();
    setDisplayLogOutConfirmation(false);
  };

  return {
    displayLogOutConfirmation,
    handleShowLogOutConfirmation,
    handleCloseLogOutConfirmation,
    handleLogOut,
  };
};
