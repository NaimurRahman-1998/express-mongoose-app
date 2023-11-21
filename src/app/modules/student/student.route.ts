import express from 'express';
import { studentController } from './student.controller';
const router = express.Router();

router.post('/create-student' , studentController.createStudent);
router.get('/get-students' , studentController.getStudent)

export const studentRoutes = router;