import { Outlet, useLocation } from "react-router-dom";
import { debounce } from "lodash";
import { useEffect, useState } from "react";
import Logo from "./components/Logo";
import Header from "./components/Header";
import NavCompany from "./components/NavCompany";
import NavModule from "./components/NavModule";
import NavSettings from "./components/NavSettings";
import NavAdd from "./components/NavAdd";
import OnboardBar from "./components/OnboardBar";
import TaskSubnav from "@/pages/Tasks/components/Subnav";
import SharedSubnav from "@/pages/Shared/components/Subnav";

const AppLayout = () => {
  const [aside, setAside] = useState(window.innerWidth < 768 ? false : true);
  // const [mainHeight, setMainHeight] = useState(window.innerHeight - 64);

  window.addEventListener(
    "resize",
    debounce(() => {
      window.innerWidth < 768 ? setAside(false) : setAside(true);
      // setMainHeight(window.innerHeight - 64)
    }, 200)
  );

  const currentModulePath = useLocation().pathname.split("/")[1] || "home";
  const moduleWithSubnavPath = ["tasks", "shared"];
  const [subnav, setSubnav] = useState(
    moduleWithSubnavPath.includes(currentModulePath) ? true : false
  );

  let moduleSubnav;
  switch (currentModulePath) {
    case "tasks":
      moduleSubnav = <TaskSubnav />;
      break;
    case "shared":
      moduleSubnav = <SharedSubnav />;
      break;

    default:
      break;
  }

  useEffect(() => {
    if (!moduleWithSubnavPath.includes(currentModulePath)) {
      aside ? setSubnav(false) : setSubnav(true);
    } else {
      setSubnav(true);
    }
  }, [currentModulePath]);

  return (
    <div className="bg-gray-200 min-h-screen">
      {currentModulePath === "shared" && <OnboardBar />}
      <aside
        className={`bg-white min-h-screen transition-all fixed top-0 left-0 z-40 overflow-hidden ${
          aside ? "w-72" : "w-16"
        }`}
      >
        <Logo aside={aside} />
        <div className="flex">
          <div className={`${!subnav ? "w-72" : "w-16"}`}>
            <NavCompany aside={aside} subnav={subnav} />
            {currentModulePath === "settings" ? (
              <NavSettings aside={aside} current={currentModulePath} />
            ) : (
              <NavModule aside={aside} current={currentModulePath} />
            )}
            <hr className="my-2 border-gray-300" />
            <NavAdd aside={aside} subnav={subnav} />
          </div>
          {aside && moduleSubnav}
        </div>
      </aside>
      <Header
        aside={aside}
        setAside={setAside}
        subnav={subnav}
        setSubnav={setSubnav}
        moduleWithSubnavPath={moduleWithSubnavPath}
        currentModulePath={currentModulePath}
      />
      <div
        className={`overflow-auto pt-16 transition-all ${
          aside ? "pl-72" : "pl-16"
        }`}
      >
        <main className="p-2">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
