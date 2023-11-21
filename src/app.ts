import cors from 'cors';
import express from 'express';
import { studentRoutes } from './app/modules/student/student.route';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/v1/student', studentRoutes);

app.get('/', (req, res) => {
  res.send('hello world');
});

export default app;
