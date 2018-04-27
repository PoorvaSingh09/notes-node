// console.log('Starting notes.js');
const fs = require('fs');

var fetchNotes = () => {
  try {
    var data = fs.readFileSync('notes-data.json');
    return JSON.parse(data);
  } catch (e) {
    return [];
  }
};

var saveNotes = (notes) => {
  var noteString = JSON.stringify(notes);
  fs.writeFileSync('notes-data.json', noteString);
};

var addNote = (title, body) => {
  var notes = fetchNotes();
  var note = {
    title,
    body
  };


  var duplicates = notes.filter((note) => note.title === title);
  if (duplicates.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }

  return undefined;
};

var getAll = () => {
  return fetchNotes();
};

var getNote = (title) => {
  var notes = fetchNotes();
  var filteredNotes = notes.filter((note) => note.title === title);
  return filteredNotes[0];
};

var removeNote = (title) => {
  var notes = fetchNotes();
  var filteredNotes = notes.filter((note) => note.title !== title);
  saveNotes(filteredNotes);
  return notes.length !== filteredNotes.length;
};

var logNote = (note) => {
  debugger;
  console.log('-----');
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
  logNote
};

// module.exports.addNote = () => {
//   console.log('Adding note');
//   return 'New Note';
// };
//
// module.exports.add = (a,b) => {
//   return a+b;
// };
