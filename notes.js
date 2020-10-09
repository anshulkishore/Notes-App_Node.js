const fs = require('fs')
const chalk = require('chalk')

//function to add note
const addNote = (title, body) => {
    const notes = loadNotes()

    // const duplicateNotes = notes.filter((note) => note.title === title)
    // const duplicateNotes = notes.filter(function (note) {
    //     return note.title === title
    // })

    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)

        console.log(chalk.blue.inverse('New note added with title: ' + title))
    } else {
        console.log(chalk.yellow.inverse('Note title already taken!!'))
    }
}

//function to remove a note
const removeNote = (title) => {
    const notes = loadNotes()

    const notesToKeep = notes.filter((note) => note.title !== title)

    if (notes.length === notesToKeep.length) {
        console.log(chalk.red.inverse('No note found with this title !!'))
    } else {
        console.log(chalk.green.inverse('Note removed !!'))
        saveNotes(notesToKeep)
    }
}

//function to list all note titles stored
const listNodes = () => {
    console.log(chalk.blueBright.inverse('Your Notes:'))
    const noteList = loadNotes()
    noteList.forEach((note) => {
        console.log(note.title)
    });
}

//function to read a note given a title
const readNote = (title) => {
    const notes = loadNotes()
    const resultNote = notes.find((note) => note.title === title)

    if (resultNote) {
        console.log(chalk.yellow.inverse(resultNote.title))
        console.log(resultNote.body)
    } else {
        console.log(chalk.red.inverse('No note found with title ' + title))
    }
}

//function to load all stored notes into an array
const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

//function to save a note
const saveNotes = (notes) => {
    fs.writeFileSync('notes.json', JSON.stringify(notes))
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNodes: listNodes,
    readNote: readNote
}