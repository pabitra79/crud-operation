const express = require("express");
const studentController = require("../controller/studentcontroller");
const router = express.Router();

router.post("/create-student", studentController.createStudent);
router.get("/get-student", studentController.getsStudent);
router.get("/add-student", studentController.addStduent);
router.post("/update/students/:id", studentController.updateStudent);
router.get("/edit/students/:id", studentController.editStudent);
router.get("/delete/:id", studentController.deleteStudent);
module.exports = router;
