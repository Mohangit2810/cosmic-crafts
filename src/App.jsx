import { BrowserRouter, Route, Routes } from "react-router-dom";
import ServiceList from "./pages/ServiceList";
import HomePage from "./pages/HomePage";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="services" element={<ServiceList />} />
        <Route path="contactus" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// color codes for cosmic text (Purple):

// #5828E3
// #210535
// #430d4b
// #7b337d
// #c874b2
// #f5d5e0

// color codes for cosmic text (Greeen):

// #013026
// #014760
// #107e57
// #a1ce3f
// #cbe58e
