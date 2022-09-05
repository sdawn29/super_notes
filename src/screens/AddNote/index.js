import { useState } from "react";
import { RichTextEditor } from "@mantine/rte";

export default function AddNote() {
  const [value, onChange] = useState("");
  return (
    <div>
      <div className="text-2xl font-semmibold mb-4">Enter your note.</div>
      <div className="flex flex-col gap-4">
        <div className="w-full">
          <input
            placeholder="Title"
            className="p-2 border border-slate-300 rounded w-full"
          />
        </div>
        <div>
          <RichTextEditor
            value={value}
            onChange={onChange}
            height={50}
            useContainer={false}
            containerStyle={{ minHeight: 1000 }}
          />
        </div>
      </div>
    </div>
  );
}
