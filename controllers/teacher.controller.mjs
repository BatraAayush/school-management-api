import { Teacher } from "../models/teacher.model.mjs";

const getAllTeachers = async () => {
  try {
    const teachers = await Teacher.find();

    return teachers;
  } catch (error) {
    throw error;
  }
};

const addTeacher = async (teacherData) => {
  try {
    const teacher = new Teacher(teacherData);
    const addedTeacher = await teacher.save();

    return addedTeacher;
  } catch (error) {
    throw error;
  }
};

const updateTeacher = async (teacherId, teacherData) => {
  try {
    const teacher = await Teacher.findByIdAndUpdate(teacherId, teacherData, {
      new: true,
    });

    return teacher;
  } catch (error) {
    throw error;
  }
};

const deleteTeacher = async (teacherId) => {
  try {
    const teacher = await Teacher.findByIdAndDelete(teacherId);

    return teacher;
  } catch (error) {
    throw error;
  }
};

const getTeacher = async (teacherId) => {
  try {
    const teacher = await Teacher.findById(teacherId);

    return teacher;
  } catch (error) {
    throw error;
  }
};

export { getAllTeachers, addTeacher, updateTeacher, deleteTeacher, getTeacher };
