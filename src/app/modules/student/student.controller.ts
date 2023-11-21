import { Request, Response } from 'express';
import { studentServices } from './student.service';

const createStudent = async (req: Request, res: Response) => {
  try {
    const student = req.body;
    const result = await studentServices.createStudentIntoDb(student);
    console.log('success');
    res.status(200).json({
      message: 'success',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getStudent = async (req: Request, res: Response) => {
  try {
    const result = await studentServices.getStudentsFromDb();
    console.log('all data found');
    res.status(200).json({
      message: 'success',
      data: result,
    });
  } catch (error) {
    console.log(error)
  }
};

export const studentController = {
  createStudent,
  getStudent
};
