var teacher1 = {
    firstName: "Alice",
    lastName: "Johnson",
    fullTimeEmployee: true,
    yearsOfExperience: 5,
    location: "New York",
    favoriteSubject: "Mathematics"
};
var teacher2 = {
    firstName: "Bob",
    lastName: "Williams",
    fullTimeEmployee: false,
    yearsOfExperience: 3,
    location: "Los Angeles",
    numberOfJobs: 2
};
var teacher3 = {
    firstName: "Charlie",
    lastName: "Brown",
    fullTimeEmployee: true,
    yearsOfExperience: 8,
    location: "Chicago",
    contract: true
};
var director1 = {
    firstName: "Diana",
    lastName: "Prince",
    fullTimeEmployee: true,
    yearsOfExperience: 10,
    location: "Themyscira",
    nameOfDepartment: "Operations",
    numberOfReports: 5
};
console.log(teacher1);
console.log(teacher2);
console.log(teacher3);
console.log(director1);
function printTeacher(firstName, lastName) {
    return "".concat(firstName.charAt(0), ". ").concat(lastName);
}
console.log(printTeacher("John", "Doe"));
console.log(printTeacher("Jane", "Smith"));
