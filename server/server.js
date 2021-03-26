import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import postRoutes from './routes/posts.js';

const app = express();

dotenv.config();

// available routes
app.get("/", (req, res) => {
    res.send("Hello Wooorld");
});

// routes
app.use("/posts", postRoutes);

// generate setup
app.use(express.json({ limit: '30mb', extended: true}));
app.use(express.urlencoded({ limit: '30mb, extended: true' }));
app.use(cors());

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

const DB_NAME = process.env.DB_NAME;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const MONGO_URI = process.env.MONGO_URI;

const connectionStr = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${MONGO_URI}/${DB_NAME}?retryWrites=true&w=majority`;

// connect to MongoDB
mongoose.connect(connectionStr, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
})
    .then(() => {
        console.log(`MongoDB is connected 😎 on http://localhost:${PORT}`);
    })
    .catch((error) => {
        console.log("[ERROR] DB Connection failed", error);
    });