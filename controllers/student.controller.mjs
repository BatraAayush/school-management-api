import { Student } from "../models/student.model.mjs";

const getAllStudents = async () => {
  try {
    const students = await Student.find();

    return students;
  } catch (error) {
    throw error;
  }
};

const addStudent = async (studentData) => {
  try {
    const student = new Student(studentData);
    const addedStudent = await student.save();

    return addedStudent;
  } catch (error) {
    throw error;
  }
};

const updateStudent = async (studentId, studentData) => {
  try {
    const student = await Student.findByIdAndUpdate(studentId, studentData, {
      new: true,
    });

    return student;
  } catch (error) {
    throw error;
  }
};

const deleteStudent = async (studentId) => {
  try {
    const student = await Student.findByIdAndDelete(studentId);

    return student;
  } catch (error) {
    throw error;
  }
};

const getStudent = async (studentId) => {
  try {
    const student = await Student.findById(studentId);

    return student;
  } catch (error) {
    throw error;
  }
};

export { getAllStudents, addStudent, updateStudent, deleteStudent, getStudent };
