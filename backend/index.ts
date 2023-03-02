import "reflect-metadata";
import { initDb } from "./src/infrastructure/db";
import express from "express";
import { router } from "./src/router";


const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Express + TypeScript Server');
});

app.use('/', router)

const startApp = async () => {
    await initDb();
}

startApp();

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
