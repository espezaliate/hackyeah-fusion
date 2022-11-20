import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Layout from "./pages/Layout";
import Router from "./routes/Router";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Router />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
