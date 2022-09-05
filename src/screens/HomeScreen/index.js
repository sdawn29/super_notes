import React from "react";
import SearchBar from "../../components/SearchBar/Index";
import SidebarCommponent from "../../components/SidebarComponent";
import AddNote from "../AddNote";

export default function HomeScreen() {
  return (
    <div className="flex">
      <div className="w-1/6">
        <SidebarCommponent />
      </div>
      <div className="w-5/6">
        <div className="py-14 w-1/2 mx-auto">
          {/* <SearchBar /> */}
          <AddNote />
        </div>
      </div>
    </div>
  );
}
