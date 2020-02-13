//Academy object template
function Academy(name, students, subjects, start, end) {
    this.name = name;
    this.students = students;
    this.subjects = subjects;
    this.start = start;
    this.end = end;
    this.numberOfClasses = this.subjects * 10;

    this.printStudents = () => this.students.forEach(student => console.log(student));
    this.printSubjects = () => this.subjects.forEach(subject => console.log(subject));
}
//Subject object template
function Subject(title, isElective, academy, students) {
    this.title = title;
    this.numberOfClasses = 10;
    this.isElective = isElective;
    this.academy = academy;
    this.students = students;

    this.overrideClasses = (number) => {
        if (number < 3) {
            this.numberOfClasses = number;
        }
    }
}
//Student object template
function Student(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.completedSubject = [];
    this.academy = null;
    this.currentSubject = null;

    this.startAcademy = (academy) => {
        this.academy = academy;
        this.academy.students.push(this);
    };
    this.startSubject = (subject) => {

        if (this.academy === null) {
            return console.log(`The Academy property of the student object is empty!`);
        }
        if (!this.academy.subjects.includes(subject.title)) {
            return console.log(`The Academy property of the student object does not include this subject!`)
        }
        if (this.currentSubject != null) {
            this.completedSubject.push(this.currentSubject);
        } 
            this.currentSubject = subject;
            this.currentSubject.students.push(this);
    }
}

let academy = new Academy("SEDC", ["Gjole Glolevski"], ["Python", "JS"], new Date(2019, 20, 15), new Date(2020, 10, 15));
let student = new Student("Ivan", "Petrusevski", 26);
let python = new Subject("Python", true, academy, []);
let subject2 = new Subject("CSS", true, academy, []);


student.startAcademy(academy);
student.startSubject(python);
console.log(student.currentSubject)
console.log(student.completedSubject);



