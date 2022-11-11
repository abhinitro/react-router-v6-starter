import "./App.css";
import Layout from "./pages/Layout";
import Contact from "./pages/Contact";
import Content from "./components/Content";
import Blog from "./components/Blog";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./pages/About";
import { useRoutes } from "react-router-dom";

import FormDataContext from "./context/FormData";
import React, { useState, useContext } from "react";
import AuthContext from "./context/AuthContext";

/***
 * Functional follows hooks
 * Class component follows lifecycle
 *
 */
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
          element: <Content getForm={getForm} />,
        },
      ],
    },

    {
      path: "/admin",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <About getForm={getForm} />,
        },
        {
          path: "about",
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

          {/* <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />} />
              <Route index element={<Content getForm={getForm} />} />
              <Route path="contact/:id" element={<Contact />}></Route>
              <Route path="blogs" element={<Blog></Blog>} />
              <Route path="about" element={<About></About>}></Route>
            </Routes>
          </BrowserRouter> */}
        </AuthContext.Provider>
      </FormDataContext.Provider>
    </div>
  );
}
