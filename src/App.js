import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';

function App() {
  const localStorageKey = 'notesAppNotes';

  // Load notes from local storage or use default
  const loadNotes = () => {
    const storedNotes = localStorage.getItem(localStorageKey);
    return storedNotes ? JSON.parse(storedNotes) : [];
  };

  const [notes, setNotes] = useState(loadNotes());
  const [currentNote, setCurrentNote] = useState(null);

  // Save notes to local storage whenever they change
  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(notes));
  }, [notes]);

  const handleCreateOrUpdateNote = (note) => {
    if (note.id) {
      // Update existing note
      setNotes((prevNotes) =>
          prevNotes.map((n) => (n.id === note.id ? note : n))
      );
    } else {
      // Create new note
      const newNote = { ...note, id: Date.now() };
      setNotes((prevNotes) => [...prevNotes, newNote]);
    }
    setCurrentNote(null);
  };

  const handleDeleteNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  const handleEditNote = (note) => {
    setCurrentNote(note);
  };

  return (
      <Container className="mt-5 container">
        <h1 className="text-center">Simple Notes App</h1>
        <Row>
          <Col md={4}>
            <NoteForm onSubmit={handleCreateOrUpdateNote} currentNote={currentNote} />
          </Col>
          <Col md={8}>
            <NoteList notes={notes} onDelete={handleDeleteNote} onEdit={handleEditNote} />
          </Col>
        </Row>
      </Container>
  );
}

export default App;
