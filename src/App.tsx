import { Outlet } from "react-router";
import Navbar from "./components/Layout/CommonLayout/Navbar";
import Footer from "./components/Layout/CommonLayout/Footer";

const App = () => {
  return (
    <div>
     <Navbar/>
      <main className="">
        <Outlet/>
      </main>
     <Footer/>
    </div>
  );
};

export default App;