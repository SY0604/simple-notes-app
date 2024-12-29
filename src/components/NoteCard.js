import React from 'react';
import { Card, Button, Badge } from 'react-bootstrap';

function NoteCard({ note, onEdit, onDelete }) {
    return (
        <Card className="note-card mb-4">
            <Card.Body>
                <Card.Title className="note-title">{note.title}</Card.Title>
                <Card.Text>{note.content}</Card.Text>
                {note.tag && (
                    <Badge className="note-tag mb-2">{note.tag}</Badge>
                )}
                <div className="mt-3 d-flex justify-content-between">
                    <Button
                        variant="warning"
                        className="btn-custom"
                        onClick={() => onEdit(note)}
                    >
                        Edit
                    </Button>
                    <Button
                        variant="danger"
                        className="btn-custom"
                        onClick={() => onDelete(note.id)}
                    >
                        Delete
                    </Button>
                </div>
            </Card.Body>
        </Card>
    );
}

export default NoteCard;
