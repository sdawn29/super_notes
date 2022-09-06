import React from "react";

export default function SearchBar() {
  return (
    <div>
      <input
        className="w-full p-2 text-sm border rounded outline-none border-slate-300"
        placeholder="Search notes"
      ></input>
    </div>
  );
}
