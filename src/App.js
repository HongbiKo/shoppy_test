import React from "react";
import { Outlet } from "react-router-dom";
import Header from ".//components/Header";
import { AuthContextProvider } from "./components/context/AuthContext";

export default function App() {
  return (
    <AuthContextProvider>
      <Header />
      <Outlet />
    </AuthContextProvider>
  );
}
