import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Contact from "./pages/Contact";
import Content from "./components/Content";
import Blog from "./components/Blog";
import 'bootstrap/dist/css/bootstrap.min.css';
import About from "./pages/About";

/***
 * Functional follows hooks
 * Class component follows lifecycle
 *  
 */
export default function App(props) {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}/>
            <Route index element={<Content />} />
            <Route path="contact/:id/:uId" element={<Contact />}></Route>
            <Route path="blogs" element={<Blog></Blog>}/>
            <Route path="about" element={<About></About>}>
          </Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}
