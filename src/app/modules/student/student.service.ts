import { Student } from './student.interface';
import { StudentModel } from './student.schema';

const createStudentIntoDb = async (student: Student) => {
  const result = await StudentModel.create(student);
  return result;
};

const getStudentsFromDb = async () => {
  return await StudentModel.find();
};

const getSingleStudentFromDb = async (id: string) => {
  try {
    const result = await StudentModel.findById(id);

    // You might want to customize this check based on your application logic
    if (!result) {
      throw new Error('Student not found');
    }

    return result;
  } catch (error) {
    console.error(error);
    throw error; // Re-throw the error to be caught by the controller
  }
};

export const studentServices = {
  createStudentIntoDb,
  getStudentsFromDb,
  getSingleStudentFromDb,
};
