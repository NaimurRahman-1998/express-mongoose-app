import { Schema, model } from 'mongoose';
import { Address, Student } from './student.interface';

const addressSchema = new Schema<Address>({
    street : { type : String , required : true },
    city : { type : String , required : true },
    state : { type : String , required : true },
    zipCode : { type : String },

})
const studentSchema = new Schema<Student>({
    name : {type : String , required : true},
    age : { type :Number },
    gender : ['Male','Female'],
    address : addressSchema,
    bloodGroup : ["A", "A+", "B", "B+", "O", "O+", "AB", "AB-", "AB+"]
})

export const StudentModel = model<Student>('Student' , studentSchema)