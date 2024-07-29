import React, { useState, useEffect } from 'react';

const Note = ({ note, deleteNote }) => {
  return (
    <li className="note-box">
      {note.content}
      <button className="delete-button" onClick={() => deleteNote(note._id)}>
        Delete
      </button>
    </li>
  );
};

export default Note;
