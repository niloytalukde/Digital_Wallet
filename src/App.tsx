import { Outlet } from "react-router";
import Navbar from "./components/Layout/CommonLayout/Navbar";
import Footer from "./components/Layout/CommonLayout/Footer";
import { generateSidebarRoutes } from "./Utils/generateSidebarRoutes";
import { AgentSidebarItems } from "./routes/AgentSidebarItems";


const App = () => {

console.log(generateSidebarRoutes(AgentSidebarItems));
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