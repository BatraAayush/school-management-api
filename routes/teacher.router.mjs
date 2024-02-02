import express from "express";

import {
  getAllTeachers,
  addTeacher,
  getTeacher,
  updateTeacher,
  deleteTeacher,
} from "../controllers/teacher.controller.mjs";

const teacherRouter = express.Router();

teacherRouter.get("/teachers", async (req, res) => {
  try {
    const teachers = await getAllTeachers();

    if (!teachers) {
      res.status(404).json({ error: "Error fetching all teachers" });
    }

    res
      .status(201)
      .json({ message: "Teachers fetched successfully", teachers: teachers });
  } catch (error) {
    res.status(500).json({ error: "Unable to fetch all teachers", error });
  }
});

teacherRouter.post("/teachers", async (req, res) => {
  try {
    const teacherData = req.body;
    const addedTeacher = await addTeacher(teacherData);

    if (!addedTeacher) {
      res.status(404).json({ error: "Error adding new teacher" });
    }

    res
      .status(201)
      .json({ message: "Teacher added successfully", teacher: addedTeacher });
  } catch (error) {
    res.status(500).json({ error: "Unable to add new teacher", error });
  }
});

teacherRouter.get("/teachers/:teacherId", async (req, res) => {
  try {
    const teacherId = req.params.teacherId;
    const teacher = await getTeacher(teacherId);

    if (!teacher) {
      res.status(404).json({ error: "Teacher not found" });
    }

    res
      .status(201)
      .json({ message: "Teacher fetched successfully", teacher: teacher });
  } catch (error) {
    res.status(500).json({ error: "Unable to fetch teacher", error });
  }
});

teacherRouter.put("/teachers/:teacherId", async (req, res) => {
  try {
    const teacherId = req.params.teacherId;
    const teacherData = req.body;
    const updatedTeacher = await updateTeacher(teacherId, teacherData);

    if (!updatedTeacher) {
      res.status(404).json({ error: "Teacher not found" });
    }

    res
      .status(201)
      .json({
        message: "Teacher updated successfully",
        teacher: updatedTeacher,
      });
  } catch (error) {
    res.status(500).json({ error: "Unable to update teacher", error });
  }
});

teacherRouter.delete("/teachers/:teacherId", async (req, res) => {
  try {
    const teacherId = req.params.teacherId;
    const deletedTeacher = await deleteTeacher(teacherId);

    if (!deletedTeacher) {
      res.status(404).json({ error: "Teacher not found" });
    }

    res
      .status(201)
      .json({
        message: "Teacher deleted successfully",
        teacher: deletedTeacher,
      });
  } catch (error) {
    res.status(500).json({ error: "Unable to delete teacher", error });
  }
});

export { teacherRouter };
