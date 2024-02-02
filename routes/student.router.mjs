import express from "express";

import {
  getAllStudents,
  addStudent,
  getStudent,
  updateStudent,
  deleteStudent,
} from "../controllers/student.controller.mjs";

const studentRouter = express.Router();

studentRouter.get("/students", async (req, res) => {
  try {
    const students = await getAllStudents();

    if (!students) {
      res.status(404).json({ error: "Error fetching all students" });
    }

    res
      .status(200)
      .json({ message: "Students fetched successfully", students: students });
  } catch (error) {
    res.status(500).json({ error: "Unable to fetch all students", error });
  }
});

studentRouter.post("/students", async (req, res) => {
  try {
    const studentData = req.body;
    const addedStudent = await addStudent(studentData);

    if (!addedStudent) {
      res.status(404).json({ error: "Error adding new student" });
    }

    res
      .status(201)
      .json({ message: "Student added successfully", student: addedStudent });
  } catch (error) {
    res.status(500).json({ error: "Unable to add new student", error });
  }
});

studentRouter.get("/students/:studentId", async (req, res) => {
  try {
    const studentId = req.params.studentId;
    const student = await getStudent(studentId);

    if (!student) {
      res.status(404).json({ error: "Student not found" });
    }

    res
      .status(200)
      .json({ message: "Student fetched successfully", student: student });
  } catch (error) {
    res.status(500).json({ error: "Unable to fetch student", error });
  }
});

studentRouter.put("/students/:studentId", async (req, res) => {
  try {
    const studentId = req.params.studentId;
    const studentData = req.body;
    const updatedStudent = await updateStudent(studentId, studentData);

    if (!updatedStudent) {
      res.status(404).json({ error: "Student not found" });
    }

    res
      .status(201)
      .json({
        message: "Student updated successfully",
        student: updatedStudent,
      });
  } catch (error) {
    res.status(500).json({ error: "Unable to update student", error });
  }
});

studentRouter.delete("/students/:studentId", async (req, res) => {
  try {
    const studentId = req.params.studentId;
    const deletedStudent = await deleteStudent(studentId);

    if (!deletedStudent) {
      res.status(404).json({ error: "Student not found" });
    }

    res
      .status(201)
      .json({
        message: "Student deleted successfully",
        student: deletedStudent,
      });
  } catch (error) {
    res.status(500).json({ error: "Unable to delete student", error });
  }
});

export { studentRouter };
