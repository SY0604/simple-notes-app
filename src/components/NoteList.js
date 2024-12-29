import React from 'react';
import { Row, Col } from 'react-bootstrap';
import NoteCard from './NoteCard';

function NoteList({ notes, onDelete, onEdit }) {
    return (
        <Row>
            {notes.map((note) => (
                <Col md={6} key={note.id}>
                    <NoteCard note={note} onEdit={onEdit} onDelete={onDelete} />
                </Col>
            ))}
        </Row>
    );
}

export default NoteList;
