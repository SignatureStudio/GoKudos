import {  Outlet } from "react-router-dom";

const TimeLayout = (props) => {
  return (
    <section className="bg-white">
      <Outlet />
    </section>
  );
};
export default TimeLayout;
