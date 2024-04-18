import React from "react";
import Footer from "./Footer/Footer";
import { useSelector } from "react-redux";
import { Navbar } from "../../features/home";

function Layout({ children }) {
  const { isLogged, user } = useSelector((store) => store.users.authUser);

  return (
    <>
      {isLogged && user && <Navbar />}
      {children}
      <Footer />
    </>
  );
}

export default Layout;
