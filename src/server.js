import router from "./routers/students.js";
import dotenv from 'dotenv';
import cors from 'cors';
import pino from 'pino';

dotenv.config();

const PORT = process.env.PORT;

const app = express();


app.use(cors());
app.use(express.json())
app.use(pino({
    transport: {
        target: 'pino-pretty',
    },
}),
);

app.use(router);

app.use('*', (req, res, next) => {
    res.status(404).json({
        message: 'not found',
    })
})

app.use((err, req, res, next) => {
    res.status(500).json({
        message: 'error',
        error: err.message,
    })
})

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
    
})
