import React from "react";
import SearchBar from "../../components/SearchBar/Index";
import { useSelector } from "react-redux";
import Card from "../../components/Card";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

export default function Home() {
  let navigate = useNavigate();

  const notes = useSelector((state) => state.notes);

  function handleAddNoteButtonClick() {
    navigate("add");
  }

  return (
    <div>
      <SearchBar />
      {notes.length > 0 ? (
        <>
          <div className="mt-4 mb-4 font-semibold">All Notes</div>
          <div className="flex flex-wrap gap-2">
            {notes.map((note) => (
              <Card
                key={note.id}
                title={note.title}
                description={note.description}
                labels={note.labels}
              />
            ))}
          </div>
        </>
      ) : (
        <>
          <div className="my-4 text-xl font-semibold text-slate-500">
            No notes Found
          </div>
          <div className="w-20">
            <Button variant="light" onClick={handleAddNoteButtonClick}>
              Add Note
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
