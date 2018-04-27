// var obj = {
//   name: 'Poorva'
// };
//
// var stringObj = JSON.stringify(obj);
//
// console.log(typeof stringObj);
//
// console.log(stringObj);
//
// var personObj = '{"name":"Andrew", "age":"25"}';
//
// var person = JSON.parse(personObj);
//
// console.log(typeof person);
//
// console.log(person);

const fs = require('fs');
var originalNote = {
  title: "Some title",
  body: "Some body"
}

var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

// var noteString = fs.readFileSync('notes.json');
// var note = JSON.parse(noteString);
// console.log(typeof note);
// console.log(note.title);
