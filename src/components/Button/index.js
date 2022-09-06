import React from "react";

export default function Button(props) {
  switch (props.variant) {
    case "filled":
      return (
        <button
          className="w-full px-2 py-2 text-sm font-bold text-white bg-blue-600 rounded shadow-lg cursor-pointer select-none shadow-blue-500/50 hover:bg-blue-700 active:shadow-md active:shadow-blue-500/50"
          onClick={props.onClick}
        >
          {props.children}
        </button>
      );
    case "outline":
      return (
        <button
          className="w-full px-2 py-2 text-sm font-bold text-blue-500 border border-blue-500 rounded cursor-pointer select-none hover:bg-blue-50"
          onClick={props.onClick}
        >
          {props.children}
        </button>
      );
    case "light":
      return (
        <button
          className="w-full px-2 py-2 text-sm font-bold text-blue-500 bg-blue-100 rounded cursor-pointer select-none hover:bg-blue-200 active:bg-blue-300"
          onClick={props.onClick}
        >
          {props.children}
        </button>
      );
    default:
      return (
        <button
          className="w-full px-2 py-2 text-sm font-bold text-white bg-blue-600 rounded shadow-lg cursor-pointer select-none shadow-blue-500/50 hover:bg-blue-700 active:shadow-md active:shadow-blue-500/50"
          onClick={props.onClick}
        >
          {props.children}
        </button>
      );
  }
}
