import "./App.css";
import Layout from "./pages/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import { useRoutes } from "react-router-dom";

import FormDataContext from "./context/FormData";
import React, { useState, useContext } from "react";
import AuthContext from "./context/AuthContext";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

import { connect, Provider } from "react-redux";



export default function App(props) {
  const [data, setFormData] = useState(null);

  const getForm = (data) => {
    setFormData(data);
  };

  const context = useContext(FormDataContext);

  const secondContext = useContext(AuthContext);
  let element = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home getForm={getForm} />,
        },

        {
          path: "contact",
          element: <Contact getForm={getForm} />,
        },
      ],
    },

    
  ]);

  console.log({ secondContext });

  return (
    <div className="App">
      <FormDataContext.Provider value={context}>
        <AuthContext.Provider value={true}>
          {element}
      </AuthContext.Provider>
      </FormDataContext.Provider>
    </div>
  );
}
