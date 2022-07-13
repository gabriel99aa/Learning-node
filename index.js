console.clear();
import express from 'express';
import dotenv from "dotenv";
import accountRouter from "./routes/account.js";

dotenv.config();

const PORT = process.env.PORT;
const expressApp = express();

expressApp.use(express.json());
expressApp.use(express.text());
expressApp.use("/account", accountRouter);


expressApp.listen(PORT, () => {
    console.log(`listen on ${PORT}`);
})