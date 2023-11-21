import { Student } from "./student.interface";
import { StudentModel } from "./student.schema";

const createStudentIntoDb = async (student : Student) =>{
    const result =  await StudentModel.create(student);
    return result
}

export const studentServices = {
    createStudentIntoDb
}