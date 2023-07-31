import express, { Express, Request, Response } from 'express';
import { getConfig } from "./config";

const app: Express = express();
const port = getConfig('port');

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, this is Express + TypeScript');
});

app.listen(port, () => {
    console.log(`[Server]: I am running at https://localhost:${port}`);
});