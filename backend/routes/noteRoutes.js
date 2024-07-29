const express = require('express');
const router = express.Router();
const Note = require('../models/noteModels');

router.post('/', async (req, res) => {
  const note = new Note({
    content: req.body.content,
  });
  await note.save();
  res.send(note);
});

router.get('/', async (req, res) => {
  const notes = await Note.find();
  res.send(notes);
});

router.delete('/:id', async (req, res) => {
  await Note.findByIdAndDelete(req.params.id);
  res.send({ message: 'Note deleted' });
});

module.exports = router;
