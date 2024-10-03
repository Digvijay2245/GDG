const sqlite3 = require('sqlite3').verbose()

// Connecting to SQLite database
const db = new sqlite3.Database('./events.db', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (error) => {
    if (error) {
        return console.error(error.message)
    }
    console.log('Connected to the SQLite database.')
})

db.run(`CREATE TABLE IF NOT EXISTS events (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    date TEXT NOT NULL,
    description TEXT
)`)

db.run(`CREATE TABLE IF NOT EXISTS event_images (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    event_id INTEGER NOT NULL,
    image BLOB,
    FOREIGN KEY(event_id) REFERENCES events(id)
)`)

module.exports = db
