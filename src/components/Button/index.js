import React from "react";

export default function Button(props) {
  switch (props.variant) {
    case "filled":
      return (
        <button
          className="bg-blue-600 font-semibold text-white rounded py-2 text-sm hover:bg-blue-500 select-none cursor-pointer"
          onClick={props.onClick}
        >
          {props.children}
        </button>
      );
    case "outline":
      return (
        <button
          className="border border-blue-600 font-bold text-blue-600 rounded py-2 text-sm hover:bg-blue-200 select-none cursor-pointer"
          onClick={props.onClick}
        >
          {props.children}
        </button>
      );
    case "light":
      return (
        <button
          className="bg-blue-100 font-bold text-blue-600 rounded py-2 text-sm hover:bg-blue-200 select-none cursor-pointer"
          onClick={props.onClick}
        >
          {props.children}
        </button>
      );
    default:
      return (
        <button
          className="bg-blue-600 font-bold text-white rounded py-2 text-sm hover:bg-blue-500 select-none cursor-pointer"
          onClick={props.onClick}
        >
          {props.children}
        </button>
      );
  }
}
