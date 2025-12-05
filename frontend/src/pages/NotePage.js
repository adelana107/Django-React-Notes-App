import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ReactComponent as ArrowLeft } from "../assets/arrow-left.svg";

const NotePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [note, setNote] = useState({ body: "" });

  // Fetch note if editing existing
  useEffect(() => {
    const getNote = async () => {
      if (id === "new") return;

      try {
        const response = await fetch(`/api/notes/${id}/`);
        if (!response.ok) throw new Error("Note not found");
        const data = await response.json();
        setNote(data);
      } catch (error) {
        console.error(error);
      }
    };

    getNote();
  }, [id]);

  // Update existing note
  const updateNote = async () => {
    try {
      const response = await fetch(`/api/notes/${id}/`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(note),
      });

      if (!response.ok) {
        const errData = await response.json();
        console.error("Update failed:", errData);
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Delete note
  const deleteNote = async () => {
    try {
      const response = await fetch(`/api/notes/${id}/`, {
        method: "DELETE",
      });

      if (!response.ok) {
        console.error("Delete failed");
      } else {
        navigate("/");
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Create new note
  const createNote = async () => {
    try {
      const response = await fetch(`/api/notes/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(note),
      });

      if (!response.ok) throw new Error("Failed to create note");

      const data = await response.json();
      console.log("Created note:", data);
    } catch (error) {
      console.error(error);
    }
  };

  // Handle back button or Done
  const handleSubmit = async () => {
    if (id !== "new" && note.body.trim() === "") {
      await deleteNote();
    } else if (id !== "new") {
      await updateNote();
    } else if (id === "new" && note.body.trim() !== "") {
      await createNote();
    }

    navigate("/");
  };

  return (
    <div className="note">
      <div className="note-header">
        <h3>
          <ArrowLeft onClick={handleSubmit} style={{ cursor: "pointer" }} />
        </h3>
        {id !== "new" ? (
          <button onClick={deleteNote}>Delete</button>
        ) : (
          <button onClick={handleSubmit}>Done</button>
        )}
      </div>

      <textarea
        value={note.body}
        onChange={(e) => setNote({ ...note, body: e.target.value })}
        placeholder="Write your note here..."
      />
    </div>
  );
};

export default NotePage;
