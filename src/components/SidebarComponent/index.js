import React from "react";
import Button from "../Button";
import Logo from "../Logo";
import { useNavigate } from "react-router-dom";

export default function SidebarCommponent() {
  let navigate = useNavigate();

  function handleButtonClick() {
    navigate("add");
  }

  return (
    <div className="fixed flex flex-col w-1/6 h-screen p-4 border border-l ">
      <div className="mb-4">
        <Logo />
      </div>
      <Button onClick={handleButtonClick}>ADD NOTE</Button>
    </div>
  );
}
