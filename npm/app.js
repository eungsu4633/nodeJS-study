import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';

const app = express();
const port = 7777;

app.use(cors());
app.use(express.json());
app.use(morgan('tiny'));
app.use(helmet());

app.listen((req, res) => {
    console.log(`here is ${port}`);
});
