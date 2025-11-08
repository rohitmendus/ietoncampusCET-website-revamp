import { Outlet } from "react-router";
import Navbar from "./components/generic/Navbar.jsx";
import Footer from "./components/generic/Footer.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <Outlet />  {/* renders the current page */}
      <Footer />
    </>
  );
}
