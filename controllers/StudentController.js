// TODO 3: Import data students dari folder data/students.js
// code here
const { stdin } = require("nodemon/lib/config/defaults");
const students = require("../data/student");

// Membuat Class StudentController
class StudentController {
  index(req, res) {
    // TODO 4: Tampilkan data students
    // code here
    const data = {
      message: `Menampilkkan semua students`,
      data: [students],
    };

    res.json(data);
  }
  store(req, res) {
    const { nama } = req.body;
    students.push(nama);

    // TODO 5: Tambahkan data students
    // code here
    const data = {
      message: `Menambahkan data student`,
      data: [students],
    };

    res.json(data);
  }

  update(req, res) {
    const { id } = req.params;
    const { nama } = req.body;
    students[id] = nama;
    // TODO 6: Update data students
    // code here
    const data = {
      message: `Mengedit student id ${id}, nama ${nama}`,
      data: [students],
    };

    res.json(data);
  }

  destroy(req, res) {
    const { id } = req.params;
    const { nama } = req.body;
    students.splice(id,1);

    // TODO 7: Hapus data students
    // code here
    const data = {
      message: `Menghapus student id ${id} nama ${nama}`,
      data: [students],
    };

    res.json(data);
  }
}

// Membuat object StudentController
const object = new StudentController();

// Export object StudentController
module.exports = object;
