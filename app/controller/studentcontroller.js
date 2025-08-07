const studentmodel = require("../model/studentmodel");

class createStudent {
  // getallstudent
  async getsStudent(req, res) {
    try {
      const data = await studentmodel.find();
      res.render("list", {
        title: "stduent list",
        data: data,
      });
    } catch (err) {}
  }
  // add student
  async addStduent(req, res) {
    try {
      res.render("add", {
        titel: "student-add",
      });
    } catch (err) {
      console.log(error);
    }
  }
  // create student
  async createStudent(req, res) {
    try {
      const { name, email, password, phone } = req.body;
      const data = new studentmodel({ name, email, password, phone });
      const newdata = await data.save();
      if (newdata) {
        res.redirect("/get-student");
      } else {
        res.redirect("/add-student");
      }
    } catch (error) {
      console.log(error);
    }
  }
  async editStudent(req, res) {
    try {
      const id = req.params.id;
      const editdata = await studentmodel.findById(id);
      res.render("edit", {
        title: "edit page",
        data: editdata,
      });
    } catch (err) {
      console.log(err);
    }
  }

  async updateStudent(req, res) {
    try {
      const id = req.params.id;
      const { name, email, password, phone } = req.body;
      const updatedata = await studentmodel.findByIdAndUpdate(id, {
        name,
        email,
        password,
        phone,
      });
      if (updatedata) {
        res.redirect("/get-student");
      } else {
        res.redirect(`/edit/student/${id}`);
      }
    } catch (err) {
      console.log(err);
    }
  }
  async deleteStudent(req, res) {
    try {
      const id = req.params.id;
      const data = await studentmodel.findByIdAndDelete(id);
      if (data) {
        res.redirect("/get-student");
      } else {
        console.log("data is not deleted");
      }
    } catch (err) {
      console.log(err);
    }
  }
}
module.exports = new createStudent();
