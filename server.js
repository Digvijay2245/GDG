const express = require('express')
const multer = require('multer')
const db = require('./database')
const app = express()

app.use(express.json())

// Multer for image uploads
const upload = multer({ storage: multer.memoryStorage() })

// Route to add a new event with multiple images
app.post('/events', upload.array('images', 5), (req, res) => {
    const { name, date, description } = req.body

    const insertEventQuery = `INSERT INTO events (name, date, description) VALUES (?, ?, ?)`

    db.run(insertEventQuery, [name, date, description], function (error) {
        if (error) {
            return res.status(500).json({ error: error.message })
        }
        const eventId = this.lastID

        console.log('Event created with ID:', eventId)

        // If there are images, insert them into the event_images table
        if (req.files && req.files.length > 0) {
            const insertImageQuery = `INSERT INTO event_images (event_id, image) VALUES (?, ?)`
            console.log('Files received:', req.files)
            req.files.forEach((file) => {
                db.run(insertImageQuery, [eventId, file.buffer], (error) => {
                    if (error) {
                        console.error('Error inserting image:', error.message)
                    } else {
                        console.log('Image inserted for event ID:', eventId)
                    }
                })
            })
        }
        res.status(201).json({ eventId })
    })
})

// Get all events
app.get('/events', (req, res) => {
    const query = `SELECT id, name, date, description FROM events`

    db.all(query, [], (error, rows) => {
        if (error) {
            return res.status(500).json({ error: error.message })
        }
        res.json(rows)
    })
})

// Get event by ID with images
app.get('/events/:id', (req, res) => {
    const eventId = req.params.id

    const eventQuery = `SELECT id, name, date, description FROM events WHERE id = ?`

    db.get(eventQuery, [eventId], (error, eventRow) => {
        if (error) {
            return res.status(500).json({ error: error.message })
        }
        if (!eventRow) {
            return res.status(404).json({ error: "Event not found" })
        }

        const imagesQuery = `SELECT id, image FROM event_images WHERE event_id = ?`

        db.all(imagesQuery, [eventId], (error, imageRows) => {
            if (error) {
                return res.status(500).json({ error: error.message })
            }

            // Converting image BLOBS to base64
            const images = imageRows.map((row) => ({
                id: row.id,
                image: Buffer.from(row.image).toString('base64') // Send image as base64-encoded string
            }))

            res.json({ ...eventRow, images })
        })
    })
})

const PORT = 3000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
