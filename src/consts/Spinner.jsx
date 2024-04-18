import React from "react";
import { FadeLoader } from "react-spinners";

function Spinner() {
  return (
    <div className="container">
      <div
        style={{
          height: "calc(100vh - 325px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <FadeLoader color="#208667" />
      </div>
    </div>
  );
}

export default Spinner;
