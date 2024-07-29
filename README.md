# Notes App
A simple notes application built using React.js for the frontend and Node.js with Express and MongoDB for the backend. This app allows users to save, list, and delete notes.
## Folder Structure

## Technology Stack
#### Frontend: React.js
#### Backend: Node.js with Express
#### Database: MongoDB

## Setup Instructions
## Backend Setup

### Navigate to the backend directory:

cd notes-app/backend

### Install dependencies:
npm install

### Create MongoDB Database:
You can use MongoDB Atlas or MongoDB Compass

### Run the backend server:
npm start

The backend server will be running on http://localhost:5000

## Frontend Setup

### Navigate to the frontend directory:
cd notes-app/frontend

### Install dependencies:
npm install

### Run the frontend development server:
npm start

The frontend application will be running on http://localhost:5173

## Backend Overview

### Models
backend/models/noteModels.js: Defines the schema for a Note with fields _id, content, and createdAt.

### Routes
backend/routes/noteRoutes.js: Handles API endpoints for creating, retrieving, and deleting notes.

POST /notes: Creates a new note.

GET /notes: Retrieves all notes.

DELETE /notes/:id: Deletes a note by its ID.

### Server
backend/server.js: Sets up the Express server, connects to MongoDB, and uses the notes routes.

## Frontend Overview
### Components
frontend/src/components/Note.jsx: A component to display a single note with a delete button.

### Main Files
frontend/src/pages/Home.jsx: The Home page of application component that handles adding, listing, and deleting notes.

frontend/src/index.jsx: The entry point of the React application.

## How to Use

### Add a Note:
Enter text in the input box and click "Save Note".

The note will be saved and displayed in the list below.

### List Notes:

The notes are automatically listed when the application loads.

### Delete a Note:

Click the "Delete" button next to a note to delete it.

The note will be removed from the list.
