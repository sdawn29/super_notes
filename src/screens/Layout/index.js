import React from "react";
import { Outlet } from "react-router-dom";
import SidebarCommponent from "../../components/SidebarComponent";

export default function Layout() {
  return (
    <div className="flex">
      <div className="w-1/6">
        <SidebarCommponent />
      </div>
      <div className="w-5/6">
        <div className="w-1/2 mx-auto py-14">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
