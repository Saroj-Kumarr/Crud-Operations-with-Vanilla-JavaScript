const Add = document.getElementById("add");
const Delete = document.getElementById("delete");
const Update = document.getElementById("update");
const Read = document.getElementById("read");
const form = document.getElementById("form");
const action = document.getElementById("action");
const submit = document.getElementById("submit");
const registration = document.getElementById("registration");
const name = document.getElementById("student-name");
const course = document.getElementById("course");
const cgpa = document.getElementById("cgpa");
const showInfo = document.getElementById("showInfo");

const deleteStu = document.getElementById("deleteStu");

const updateStu = document.getElementById("updateStu");

const deleteReg = document.getElementById("student-registration");

const updateReg = document.getElementById("registration-update");

const ok = document.getElementById("ok");
const ok2 = document.getElementById("ok2");

let studentInfo = [
  {
    studentRegistration: "12208785",
    studentName: "saroj",
    studentCourse: "mca",
    studentCGPA: "8.10",
  },
  {
    studentRegistration: "12208780",
    studentName: "saroj",
    studentCourse: "mca",
    studentCGPA: "8.15",
  },
];

Add.addEventListener("click", (event) => {
  event.preventDefault();
  action.setAttribute("style", "display:flex;");
});

submit.addEventListener("click", (event) => {
  event.preventDefault();

  const studentRegistration = registration.value;
  const studentName = name.value;
  const studentCourse = course.value;
  const studentCGPA = cgpa.value;

  const data = {
    studentRegistration,
    studentName,
    studentCourse,
    studentCGPA,
  };

  studentInfo.push(data);

  action.setAttribute("style", "display:none;");
  form.reset();
});

const readStudentData = (event) => {
  event.preventDefault();

  showInfo.innerHTML = "";

  studentInfo.map((student) => {
    const { studentRegistration, studentName, studentCourse, studentCGPA } =
      student;

    const div = document.createElement("div");
    const para1 = document.createElement("p");
    const para2 = document.createElement("p");
    const para3 = document.createElement("p");
    const para4 = document.createElement("p");

    para1.textContent = "Reg no : " + studentRegistration;
    para2.textContent = "Name : " + studentName;
    para3.textContent = "Course : " + studentCourse;
    para4.textContent = "CGPA : " + studentCGPA;

    div.appendChild(para1);
    div.appendChild(para2);
    div.appendChild(para3);
    div.appendChild(para4);

    showInfo.appendChild(div);
  });
};

Read.addEventListener("click", readStudentData);

Delete.addEventListener("click", (event) => {
  event.preventDefault();
  deleteStu.setAttribute("style", "display:flex;");
});

ok.addEventListener("click", (event) => {
  event.preventDefault();

  const registration = deleteReg.value;

  const newStudentInfo = studentInfo.filter((obj) => {
    return obj.studentRegistration != registration;
  });

  studentInfo = newStudentInfo;

  readStudentData(event);
});

Update.addEventListener("click", (event) => {
  event.preventDefault();
  updateStu.setAttribute("style", "display:flex;");
});

ok2.addEventListener("click", (event) => {
  event.preventDefault();

  const registration = updateReg.value;

  const updateStudent = studentInfo.filter((obj) => {
    return obj.studentRegistration == registration;
  });

  console.log(updateStudent);

  const { studentCGPA, studentName, studentCourse, studentRegistration } =
    updateStudent[0];

  action.setAttribute("style", "display:flex;");

  registration.value = "12208785";
  name.value = studentName;
  course.value = studentCourse;
  cgpa.value = studentCGPA;
  
});
