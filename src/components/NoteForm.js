import React, { useState, useEffect } from 'react';
import { Form, Button, Card } from 'react-bootstrap';

function NoteForm({ onSubmit, currentNote }) {
    const [note, setNote] = useState({ title: '', content: '', tag: '' });

    useEffect(() => {
        if (currentNote) {
            setNote(currentNote);
        } else {
            setNote({ title: '', content: '', tag: '' });
        }
    }, [currentNote]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNote({ ...note, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(note);
        setNote({ title: '', content: '', tag: '' });
    };

    return (
        <Card className="mb-4">
            <Card.Body>
                <Card.Title className="text-center">Add / Edit Note</Card.Title>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formTitle" className="mb-3">
                        <Form.Label className="form-label">Title</Form.Label>
                        <Form.Control
                            type="text"
                            name="title"
                            value={note.title}
                            onChange={handleChange}
                            placeholder="Enter title"
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="formContent" className="mb-3">
                        <Form.Label className="form-label">Content</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={4}
                            name="content"
                            value={note.content}
                            onChange={handleChange}
                            placeholder="Enter content"
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="formTag" className="mb-3">
                        <Form.Label className="form-label">Tag</Form.Label>
                        <Form.Control
                            type="text"
                            name="tag"
                            value={note.tag}
                            onChange={handleChange}
                            placeholder="Enter tag"
                        />
                    </Form.Group>
                    <div className="d-grid">
                        <Button variant="primary" type="submit" className="btn-custom">
                            {currentNote ? 'Update Note' : 'Add Note'}
                        </Button>
                    </div>
                </Form>
            </Card.Body>
        </Card>
    );
}

export default NoteForm;
