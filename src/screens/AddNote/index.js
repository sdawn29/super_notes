import { useState } from "react";
import Button from "../../components/Button";
import { IconChevronLeft } from "@tabler/icons";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addNote } from "../../store/notes";
import { makeid } from "../../utils/makeid";

export default function AddNote() {
  let navigate = useNavigate();

  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [labels, setLabels] = useState("");

  const dispatch = useDispatch();

  function handleBackButtonClick() {
    navigate("/");
  }

  function handleAddNote() {
    let labelArray = labels.split(",").map((item) => item.trim());

    let note = {
      id: makeid(5),
      title,
      description,
      labels: labelArray,
      pinned: false,
    };

    dispatch(addNote(note));
    navigate("/");
  }

  return (
    <div>
      <div className="mb-4 w-min">
        <Button variant="light" onClick={handleBackButtonClick}>
          <IconChevronLeft />
        </Button>
      </div>
      <div className="mb-4 text-sm font-semibold">Home / Add Notes</div>
      <div className="mb-4 text-2xl font-semmibold">Enter your note.</div>
      <div className="flex flex-col gap-4">
        <div className="w-full">
          <input
            placeholder="Title"
            value={title}
            className="w-full p-2 border rounded outline-none border-slate-300"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <textarea
            className="w-full p-2 border rounded outline-none border-slate-300"
            placeholder="Description"
            rows={20}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="w-full">
          <input
            placeholder="Labels, put comma seperated labels"
            value={labels}
            className="w-full p-2 border rounded outline-none border-slate-300"
            onChange={(e) => setLabels(e.target.value)}
          />
        </div>
        <div>
          <Button variant="outline" onClick={handleAddNote}>
            ADD NOTE
          </Button>
        </div>
      </div>
    </div>
  );
}
