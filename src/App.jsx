import React from "react";
import AppRoute from "./routes/AppRoute";
import { Layout } from "./components";

function App() {
  return (
    <>
      <Layout>
        <AppRoute />
      </Layout>
    </>
  );
}

export default App;
