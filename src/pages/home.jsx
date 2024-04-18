import React from "react";
import { Header } from "../components/Layout/style";
import { Login, Navbar } from "../features/home";

function Home() {
  return (
    <>
      <Header>
        <Navbar />
        <Login />
      </Header>
    </>
  );
}

export default Home;
