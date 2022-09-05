import React from "react";
import Button from "../Button";
import Logo from "../Logo";

export default function SidebarCommponent() {
  return (
    <div className=" h-screen flex bg-slate-50 flex-col p-4">
      <div className="mb-4">
        <Logo />
      </div>
      <Button variant="light">ADD NOTE</Button>
    </div>
  );
}
