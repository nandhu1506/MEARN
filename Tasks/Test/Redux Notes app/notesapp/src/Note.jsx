import { useSelector, useDispatch } from "react-redux";
import { addNote, deleteNote, searchNote } from "./Slice";
import { useState } from "react";

function Note() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const notes = useSelector((state) => state.notes.items || []);
  const searchText = useSelector((state) => state.notes.searchText || "");
  const dispatch = useDispatch();

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div style={{ maxWidth: 400, margin: "auto", padding: 20, textAlign: "center" }}>
      <h1>Notes App</h1>

      <input
        style={{ width: "100%", padding: 8 }}
        placeholder="Enter Title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        style={{ width: "100%", padding: 8 }}
        placeholder="Enter note..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button
        style={{ marginTop: 10, padding: 8, width: "100%" }}
        onClick={() => {
          if (text.trim()) {
            dispatch(addNote({ title, text }));
            setTitle("");
            setText("");
          }
        }}
      >
        Add Note
      </button>

      <ul style={{ marginTop: 20 }}>
        {filteredNotes.length === 0 && (
          <p style={{ opacity: 0.6 }}>No notes found...</p>
        )}

        {notes.map((note) => (
          <li
            key={note.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "8px 0",
            }}
          >
            <div>
              <h3>{note.title}</h3>
              <p>{note.text}</p>
            </div>

            <button onClick={() => dispatch(deleteNote(note.id))}>❌</button>
          </li>
        ))}
      </ul>
      <input
        style={{ width: "100%", padding: 8, marginBottom: 10 }}
        placeholder="Search notes..."
        onChange={(e) => dispatch(searchNote(e.target.value))}
      />
      <ul style={{ marginTop: 20 }}>
        {searchText ? (
          filteredNotes.length > 0 ? (
            filteredNotes.map(note => (
              <li
                key={note.id}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "8px 0",
                }}
              >
                <div>
                  <h3>{note.title}</h3>
                  <p>{note.text}</p>
                </div>

                <button onClick={() => dispatch(deleteNote(note.id))}>❌</button>
              </li>
            ))
          ) : (
            <p>No notes found</p>
          )
        ) : (
          <></>
        )}
      </ul>

    </div>
  );
}

export default Note;

