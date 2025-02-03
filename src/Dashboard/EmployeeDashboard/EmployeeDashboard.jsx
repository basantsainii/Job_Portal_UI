import { Outlet } from "react-router-dom";
import EmployeeHeader from "./EmployeeHeader";
import EmployeeNavigation from "./EmployeeNavigation";
import Footer from "../Footer";
import EmployeeHome from "./EmployeeHome";

function EmployeeDashboard() {
  return (
    <>
      <div className="w-full min-h-screen border border-red-500">
          <EmployeeHeader></EmployeeHeader>
          <div className="text-center items-center min-h-[75vh]  content-center">
          <EmployeeHome>
            <Outlet></Outlet>
          </EmployeeHome>
          </div>
          <Footer></Footer>
      </div>
    </>
  );
}

export default EmployeeDashboard;
