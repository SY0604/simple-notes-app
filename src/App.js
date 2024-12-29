import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { getNotes, createNote, updateNote, deleteNote } from './api/api';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';

function App() {
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState(null);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const response = await getNotes();
      setNotes(response.data);
    } catch (error) {
      console.error('Error fetching notes:', error);
    }
  };

  const handleCreateOrUpdateNote = async (note) => {
    console.log('Note being saved:', note); // Debug log
    try {
      if (note.id) {
        await updateNote(note.id, note);
      } else {
        await createNote(note);
      }
      fetchNotes();
      setCurrentNote(null);
    } catch (error) {
      console.error('Error saving note:', error);
    }
  };

  const handleDeleteNote = async (id) => {
    try {
      await deleteNote(id);
      fetchNotes();
    } catch (error) {
      console.error('Error deleting note:', error);
    }
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
