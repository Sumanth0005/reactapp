import { Routes, Route, Outlet } from "react-router-dom";
import Footer from "./Footer";
import Blankpage from "./Blankpage";
import Components from "../Angular/components";
import Services from "../Angular/Services";
import Directives from "../Angular/Directives";
import Modules from "../Angular/Modules";
import Forms from "../Angular/Forms";
import Routing from "../Angular/Routing";
import ReactComponent from "../React/Rcomponents";
import ReactIntroduction from "../React/React";
import ReactHooks from "../React/Hooks";
export default function Maincontainer() {
  document.title = "My First React APP";

  return (
    <>
      <div className="main-container">
        <div className="container">
          <Routes>
            <Route path="/layout/:name" element={<Blankpage />} />
            <Route path="/profile/:child/" element={<Blankpage />} />
            {/* anngularROutings */}
            <Route path="Angular/Components" element={<Components />} />
            <Route path="Angular/Services" element={<Services />} />
            <Route path="Angular/Directives" element={<Directives />} />
            <Route path="Angular/Modules" element={<Modules />} />
            <Route path="Angular/Forms" element={<Forms />} />
            <Route path="Angular/Routing" element={<Routing />} />
            {/* react routing */}
            <Route path="React/Components" element={<ReactComponent />} />
            <Route path="React/Introduction" element={<ReactIntroduction />} />
            <Route path="React/Hooks" element={<ReactHooks />} />
          </Routes>
          <Outlet />
        </div>

        <Footer />
      </div>
    </>
  );
}
