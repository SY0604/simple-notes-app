import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api/notes';

// Fetch all notes
export const getNotes = async () => {
    return await axios.get(API_BASE_URL);
};

// Create a new note
export const createNote = async (note) => {
    return await axios.post(API_BASE_URL, note);
};

// Update an existing note
export const updateNote = async (id, updatedNote) => {
    return await axios.put(`${API_BASE_URL}/${id}`, updatedNote);
};

// Delete a note
export const deleteNote = async (id) => {
    return await axios.delete(`${API_BASE_URL}/${id}`);
};
