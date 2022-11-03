import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Layout2 from "./pages/Layout2";
import Contact from "./pages/Contact";

/***
 * Functional follows hooks
 * Class component follows lifecycle
 *  
 */
export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact/>}></Route>
          </Route>
          <Route path="/admin" element={<Layout2/>}>
            <Route path="about" element={<About />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
