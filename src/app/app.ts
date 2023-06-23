import express, { Request, Response } from 'express';
import {openConnection, closeConnection} from '../database/connectDB';

const app = express();

app.get('/', (req: Request, res: Response) =>
    res.send('Hello World from Home')
);

app.get("/db",(req:Request, res:Response)=>{
    openConnection();
    res.send("done....!!");
    closeConnection();
})

export default app;
