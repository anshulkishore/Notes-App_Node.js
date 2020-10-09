const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => "Your Notes..."

//function to add note
const addNote = (title, body) => {
    const notes = loadNotes()

    const duplicateNotes = notes.filter((note) => note.title === title)
    // const duplicateNotes = notes.filter(function (note) {
    //     return note.title === title
    // })

    if (duplicateNotes.length === 0) {
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

const listNodes = () => {
    console.log(chalk.blueBright.inverse('Your Notes:'))
    const noteList = loadNotes()
    noteList.forEach((note) => {
        console.log('Title: ' + note.title + ' Body: ' + note.body)
    });
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

const saveNotes = (notes) => {
    fs.writeFileSync('notes.json', JSON.stringify(notes))
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNodes: listNodes
}