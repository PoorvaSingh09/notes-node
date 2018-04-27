// console.log('Starting app.js');

const fs = require('fs');
// const os = require('os');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes.js');
var titleOptions = {
  describe: 'Title of note',
  demand: true,
  alias: 't'
};

var bodyOptions = {
  describe: 'Body of note',
  demand: true,
  alias: 'b'
};

var argv = yargs
  .command('add', 'Add a new note', {
    title: titleOptions,
    body: bodyOptions
  })
  .command('list', 'List all notes')
  .command('read', 'Reading note', {
    title: titleOptions
  })
  .command('remove', 'Removing note', {
    title: titleOptions
  })
  .help()
  .argv;

// console.log(argv);

var command = argv._[0];
// console.log(command);

if (command === 'list') {
  var allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} note(s)`);
  allNotes.forEach((note) => notes.logNote(note));
} else if (command === 'add') {
  var note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log('Note created');
    notes.logNote(note);
  } else {
    console.log('Note already taken');
  }
} else if (command === 'remove') {
  var isNoteFound = notes.removeNote(argv.title);
  var message = isNoteFound ? 'Note removed successfully' : 'Note not found';
  console.log(message);
} else if (command === 'read') {
  var note = notes.getNote(argv.title);
  if (note) {
    console.log('Note found');
    notes.logNote(note);
  } else {
    console.log('Note not found');
  }
} else {
  console.log('Command not recognized');
}

// var res = notes.addNote();
// console.log(res);
//
// var sum = notes.add(9,-2);
// console.log(sum);
//
// console.log(_.isString(true));
// console.log(_.isString('test'));
// console.log(_.uniq([2,1,2,4,5,1, 'aaa', 'bbb', 'www']));
// var user = os.userInfo();
//
// fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age} years old.`, function(err) {
//   if (err) {
//     console.log('Unable to write to file');
//   }
// });
// fs.appendFileSync('greetings.txt', `Hi ${user.username}!`);
