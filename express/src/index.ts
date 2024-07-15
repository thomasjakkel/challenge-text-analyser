
import express, { Request, Response , Application } from 'express';

const app: Application = express();
const port: number = 8000;

app.get('/', (req: Request, res: Response) => {
    res.send({
        message: "Welcome challenger",
        todo: "Start your challenge"
    });
});

app.listen(port, () => {
    console.log(`Challenge was started at http://localhost:${port}`);
});