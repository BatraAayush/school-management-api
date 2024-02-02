import "./db/db.connect.mjs";
import express from "express";
import cors from "cors";
import helmet from "helmet";

import { studentRouter } from "./routes/student.router.mjs";
import { teacherRouter } from "./routes/teacher.router.mjs";

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.use("/api/v1", studentRouter);
app.use("/api/v1", teacherRouter);

app.use("/", (err, req, res, next) => {
  console.log(err.stack);
  res.status(500).json({ error: "Something went wrong" });
});

app.use("/", (req, res) => {
  res.status(404).json({ error: "Route not found" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
