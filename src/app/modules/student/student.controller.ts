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
    console.log(error);
  }
};

const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await studentServices.getSingleStudentFromDb(id);

    if (!result) {
      return res.status(404).json({
        message: 'Student not found',
        data: null,
      });
    }

    res.status(200).json({
      message: 'success',
      data: result,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'Internal server error',
      data: null,
    });
  }
};

export const studentController = {
  createStudent,
  getStudent,
  getSingleStudent,
};
