import { Headers } from "../UI/Header";
import { Footers } from "../UI/Footers";
import { Outlet } from "react-router";
export const AppLayout = () => {
  return (
    <>
      <Headers />
      <Outlet />
      <Footers />
    </>
  );
};
