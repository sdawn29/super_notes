import React from "react";

export default function Card({ title, description, labels }) {
  return (
    <div className="w-1/3 p-4 border rounded-lg">
      <div className="font-bold">{title}</div>
      <div className="text-sm font-semibold truncate text-slate-400">
        {description}
      </div>
      <div className="flex items-center gap-2 mt-2 text-xs font-bold">
        {labels.map((label) => (
          <div className="px-2 py-1 text-blue-600 truncate bg-blue-300 rounded">
            {label}
          </div>
        ))}
      </div>
    </div>
  );
}
