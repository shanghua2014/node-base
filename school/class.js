let student = require('./student');
let teacher = require('./teacher');

function add (teacherName, students) {
    if (teacherName) {
        teacher.add(teacherName);
    }
    if (students) {
        students.forEach((item, index) => {
            student.add(item)
        });
    }
}

exports.add = add;