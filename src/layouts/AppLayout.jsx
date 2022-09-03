import { Outlet, useLocation } from "react-router-dom";
import { debounce } from "lodash";
import { useEffect, useState } from "react";
import Logo from "./components/Logo";
import Header from "./components/Header";
import NavCompany from "./components/NavCompany";
import NavModule from "./components/NavModule";
import NavAdd from "./components/NavAdd";
import TaskSubnav from "@/pages/Tasks/components/Subnav";

const AppLayout = () => {
  const [aside, setAside] = useState(window.innerWidth < 768 ? false : true);

  window.addEventListener(
    "resize",
    debounce(() => {
      window.innerWidth < 768 ? setAside(false) : setAside(true);
    }, 200)
  );

  const currentModulePath = useLocation().pathname.split("/")[1] || "home";
  const moduleWithSubnavPath = ["tasks"];
  const [subnav, setSubnav] = useState(
    moduleWithSubnavPath.includes(currentModulePath) ? true : false
  );

  let moduleSubnav;
  switch (currentModulePath) {
    case "tasks":
      moduleSubnav = <TaskSubnav />;
      break;

    default:
      break;
  }

  useEffect(() => {
    moduleWithSubnavPath.includes(currentModulePath)
      ? setSubnav(true)
      : setSubnav(false);
  }, [currentModulePath]);

  return (
    <div className="flex bg-gray-200 min-h-screen">
      <aside
        className={`bg-white min-h-screen transition-all ${
          aside ? "w-72" : "w-16"
        }`}
      >
        <Logo aside={aside} />
        <div className="flex">
          <div className={`${!subnav ? "w-72" : "w-16"}`}>
            <NavCompany aside={aside} subnav={subnav} />
            <NavModule aside={aside} current={currentModulePath} />
            <hr className="my-2 border-gray-300" />
            <NavAdd aside={aside} subnav={subnav} />
          </div>
          {aside && moduleSubnav}
        </div>
      </aside>
      <div className="flex-1 overflow-auto">
        <Header aside={aside} setAside={setAside} />
        <main className="p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
