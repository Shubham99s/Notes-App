import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Note from '../components/Note';
import './style.css';

const Home = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');
  const [errorNote, setErrorNote] = useState(false);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    const response = await axios.get('http://localhost:5000/notes');
    setNotes(response.data);
  };

  const addNote = async () => {
    if (newNote.trim()) {
      setErrorNote(false);
      const response = await axios.post('http://localhost:5000/notes', {
        content: newNote,
      });
      setNotes([...notes, response.data]);
      setNewNote('');
    } else {
      setErrorNote(true);
    }
  };

  const deleteNote = async (id) => {
    await axios.delete(`http://localhost:5000/notes/${id}`);
    setNotes(notes.filter((note) => note._id !== id));
  };

  return (
    <div className="container">
      <h1 className="heading">Notes App</h1>
      <hr />
      <h2 className="sub-heading">Add a Note</h2>
      <input
        className="input-box"
        type="text"
        value={newNote}
        onChange={(e) => setNewNote(e.target.value)}
        placeholder="Write a note..."
      />
      <button className="save-button" onClick={addNote}>
        Save Note
      </button>
      {errorNote && (
        <p className="error-text">Please enter something to Add in Notes</p>
      )}
      <h2 className="sub-heading">Notes List</h2>
      {notes.length == 0 ? (
        <p className="error-text">No Notes Available, Please Add From Above</p>
      ) : (
        <ul className="note-list">
          {notes.map((note) => (
            <Note key={note._id} note={note} deleteNote={deleteNote} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;
