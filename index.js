const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const authMiddleware=require('./middleware/authMiddleware.js'); // Imported auth middelware
const app = express()
const Routes = require("./routes/route.js") // Unused Code

const PORT = process.env.PORT || 5000

dotenv.config();

app.use(express.json({ limit: '10mb' }))
app.use(cors())

mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(console.log("Connected to MongoDB"))
    .catch((err) => console.log("NOT CONNECTED TO NETWORK", err))

// Incorrect: 'Routes' is not defined or not the intended middleware for this path
// app.use('/',Routes);

// Correct: Using 'authMiddleware' as the middleware for this path
app.use('/',authMiddleware,Routes);

app.listen(PORT, () => {
    console.log(`Server started at port no. ${PORT}`)
})
