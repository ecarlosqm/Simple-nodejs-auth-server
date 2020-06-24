import express, {Express} from "express";
import { configExpress } from "./configs/express.config";

const port: number = 3000;

const app:Express = express();

configExpress(app);

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))