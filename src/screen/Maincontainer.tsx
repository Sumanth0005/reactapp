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
import EditTable from "../React/Updateuser";
import ListTable from "../React/List";
import SearchTable from "../React/Search";
import SortTable from "../React/Sort";
import AddTable from "../React/Adduser";
import DeleteTable from "../React/Deleteuse";

export default function Maincontainer() {
  document.title = "My First React App";

  return (
    <>
      <div className="main-container">
        <div className="container">
          <Routes>
            {/* Dynamic Layout/Profile Routes */}
            <Route path="/layout/:name" element={<Blankpage />} />
            <Route path="/profile/:child" element={<Blankpage />} />

            {/* Angular Routes */}
            <Route path="/angular/components" element={<Components />} />
            <Route path="/angular/services" element={<Services />} />
            <Route path="/angular/directives" element={<Directives />} />
            <Route path="/angular/modules" element={<Modules />} />
            <Route path="/angular/forms" element={<Forms />} />
            <Route path="/angular/routing" element={<Routing />} />

            {/* React Routes */}
            <Route path="/react/components" element={<ReactComponent />} />
            <Route path="/react/introduction" element={<ReactIntroduction />} />
            <Route path="react/list" element={<ListTable />} />
            <Route path="react/search" element={<SearchTable />} />
            <Route path="react/sort" element={<SortTable />} />
            <Route path="react/add-user" element={<AddTable />} />
            <Route path="react/update-user" element={<EditTable />} />
            <Route path="react/delete-user" element={<DeleteTable />} />
          </Routes>

          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
}
