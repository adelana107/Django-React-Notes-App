import React from "react";
import { Link } from "react-router-dom";

const getTime = (note) => {
  if (!note?.updated) return "No date";
  return new Date(note.updated).toLocaleDateString();
};

const getTitle = (note) => {
  const title = note?.body?.split("\n")[0] || "New Note...";
  return title.length > 45 ? title.substring(0, 45) + "..." : title;
};

const getContent = (note) => {
  if (!note?.body) return "";
  const lines = note.body.split("\n");
  lines.shift(); 
  let content = lines.join(" ").trim();

  return content.length > 45 ? content.slice(0, 45) + "..." : content;
};

const ListItem = ({ note }) => {
  return (
    <Link to={`/note/${note.id}`}>
      <div
        className="notes-list-item"
        style={{
          cursor: "pointer",
          padding: "10px",
          borderBottom: "1px solid #ddd",
        }}
      >
        <h3>{getTitle(note)}</h3>
        <p>{getContent(note)}</p>
        <small>{getTime(note)}</small>
      </div>
    </Link>
  );
};

export default ListItem;
