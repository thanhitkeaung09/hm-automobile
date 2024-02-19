import Navbar from "./component/NavBar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Services from "./Pages/Services/Services";
import Contact from "./Pages/Contact/Contact";
// import Products from "./Pages/Products/Product";
import Products from "./Pages/Products/Products";
import Detail from "./Pages/Detail/Detail";
import { Toaster } from "react-hot-toast";

import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import Confirm from "./Pages/Confirm/Confirm";
import Forget from "./Pages/Forget/Forget";
import Footer from "./component/Footer/Footer";
const App = () => {
  return (
      <div>
        <Toaster />
        <Router>
          <Routes>
            {/* Define routes that should not have Navbar here */}
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="confirm" element={<Confirm />} />
            <Route path="forget" element={<Forget />} />

            {/* Define routes that should have Navbar here */}
            <Route
              path="*"
              element={
                <>
                  <Navbar />
                  <Routes>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="services" element={<Services />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="products" element={<Products />} />
                    <Route path="products/detail" element={<Detail />} />
                  </Routes>
                </>
              }
            />
          </Routes>
        </Router>
        <Footer/>
      </div>
  );
};

export default App;
