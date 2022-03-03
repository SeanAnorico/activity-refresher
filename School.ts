import { Student } from "./Student";
import { StudentList } from "./StudentList";

const student1 = new Student(
    "2015-105867",
    "BSCPE",
    "CEIT",
    "Jhon Rhay",
    20,
    "MALE",
    "PASAY CITY"
);

const student2 = new Student(
    "2015-105868",
    "BSCPE",
    "CEIT",
    "Jhon Rhay",
    20,
    "MALE",
    "PASAY CITY"
);

const student3 = new Student(
    "2015-105869",
    "BSCPE",
    "CEIT",
    "Jhon Rhay",
    20,
    "MALE",
    "PASAY CITY"
);

const studentList = new StudentList([
    student1,
    student2,
    student3
]);

console.log(`Before Removed, Student ${studentList.numberofStudents()}`);
console.log(studentList.getStudents());
// console.log("*************");
// console.log(studentList.updateStudentName("2015-105869", "Michael Jordan"));
// console.log("*************");
// console.log(studentList.updateAge("2015-105869", 25));
studentList.updateAge("2015-105869", 25)

studentList.updateCourse("2015-105869", "BSIT")
studentList.updateCollege("2015-105869", "CCS")
studentList.updateAddress("2015-105869", "RIZAL")

studentList.removeStudent("2015-105868")
console.log(`After Removed, Student ${studentList.numberofStudents()}`);

// console.log(studentList.checkStudentId("2015-105870"));
console.log(studentList.getStudents());
