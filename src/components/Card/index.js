import { IconPinned, IconPinnedOff } from "@tabler/icons";
import React from "react";
import { useDispatch } from "react-redux";
import { pinNote, unPinNote } from "../../store/notes";

export default function Card({ id, title, description, labels, pinned }) {
  const dispatch = useDispatch();

  function handlePinnedButtonClick() {
    let payload = {
      id,
    };
    dispatch(pinNote(payload));
  }

  function handleUnPinnedButtonClick() {
    let payload = {
      id,
    };
    dispatch(unPinNote(payload));
  }

  return (
    <div className="p-4 border rounded-lg " draggable>
      <div className="flex items-start justify-between">
        <div className="font-bold">{title}</div>
        {!pinned ? (
          <div className="p-1 cursor-pointer" onClick={handlePinnedButtonClick}>
            <IconPinned size={18} className="text-slate-600" />
          </div>
        ) : (
          <div
            className="p-1 cursor-pointer"
            onClick={handleUnPinnedButtonClick}
          >
            <IconPinnedOff size={18} className="text-slate-600" />
          </div>
        )}
      </div>
      <div className="text-sm font-semibold truncate text-slate-400">
        {description}
      </div>
      <div className="flex items-center gap-2 mt-2 text-xs font-bold">
        {labels.map((label) => (
          <div className="px-2 py-1 text-blue-600 truncate bg-blue-200 rounded">
            {label}
          </div>
        ))}
      </div>
    </div>
  );
}
