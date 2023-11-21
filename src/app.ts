import cors from 'cors';
import express from 'express';

const app = express();
app.use(cors())
app.use(express.json())

app.get('/' ,(req,res)=>{
    const a = 10;

    res.send(a);
})

export default app