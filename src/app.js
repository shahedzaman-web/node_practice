import cors from "cors";
import express from "express";
const app = express();


// using cors
app.use(cors());

// parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (res) => {
    res.send('Hello World!')
})
export default app;