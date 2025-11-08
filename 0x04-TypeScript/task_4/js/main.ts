/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/React.ts" />
/// <reference path="./subjects/Java.ts" />

namespace Subjects {
  // Create a Teacher object
  const cTeacher: Teacher = {
    firstName: "Guillaume",
    lastName: "Salva",
    experienceTeachingC: 10,
  };
  const reactTeacher: Teacher = {
    firstName: "Betty",
    lastName: "Holberton",
    experienceTeachingReact: 5,
  };
  const javaTeacher: Teacher = {
    firstName: "John",
    lastName: "Doe",
    experienceTeachingJava: 7,
  };

  // Create instances of each subject
  const cpp = new Cpp();
  const react = new React();
  const java = new Java();

  // Set the teacher for each subject
  cpp.setTeacher(cTeacher);
  react.setTeacher(reactTeacher);
  java.setTeacher(javaTeacher);

  // Test Cpp subject
  console.log("C++");
  console.log(cpp.getRequirements());
  console.log(cpp.getAvailableTeacher());

  // Test React subject
  console.log("\nReact");
  console.log(react.getRequirements());
  console.log(react.getAvailableTeacher());

  // Test Java subject
  console.log("\nJava");
  console.log(java.getRequirements());
  console.log(java.getAvailableTeacher());

  // Test a teacher with no experience in a subject
  const noExpTeacher: Teacher = {
    firstName: "No",
    lastName: "Experience",
  };

  cpp.setTeacher(noExpTeacher);
  console.log("\nC++ (No Experience Teacher)");
  console.log(cpp.getRequirements());
  console.log(cpp.getAvailableTeacher());
}
