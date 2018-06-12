let klass = require('./class');

exports.add = function ( klasses ) {
    klasses.forEach((item, index) => {
        let _klass = item.klass;
        let teacher = item.teacher;
        let students = item.students;
        klass.add(teacher, students);
    });
}