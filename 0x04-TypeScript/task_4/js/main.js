/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/React.ts" />
/// <reference path="./subjects/Java.ts" />
var Subjects;
(function (Subjects) {
    // Create a Teacher object
    var cTeacher = {
        firstName: "Guillaume",
        lastName: "Salva",
        experienceTeachingC: 10,
    };
    var reactTeacher = {
        firstName: "Betty",
        lastName: "Holberton",
        experienceTeachingReact: 5,
    };
    var javaTeacher = {
        firstName: "John",
        lastName: "Doe",
        experienceTeachingJava: 7,
    };
    // Create instances of each subject
    var cpp = new Subjects.Cpp();
    var react = new Subjects.React();
    var java = new Subjects.Java();
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
    var noExpTeacher = {
        firstName: "No",
        lastName: "Experience",
    };
    cpp.setTeacher(noExpTeacher);
    console.log("\nC++ (No Experience Teacher)");
    console.log(cpp.getRequirements());
    console.log(cpp.getAvailableTeacher());
})(Subjects || (Subjects = {}));
