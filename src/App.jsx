import React from "react"
import { UserProvider } from "./context/UserProvider";
import { RouterApp } from "./routes/RouterApp";
import "./style.scss";


function App() {


  return (
    <>
      <UserProvider>
        <RouterApp />
      </UserProvider>
    </>
  )
}

export default App
