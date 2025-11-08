interface teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience: number;
  location: string;
  [key: string]: any;
}

interface Directors extends teacher {
  numberOfReports: number;
}

let teacher1: teacher = {
  firstName: "Alice",
  lastName: "Johnson",
  fullTimeEmployee: true,
  yearsOfExperience: 5,
  location: "New York",
  favoriteSubject: "Mathematics",
};

let teacher2: teacher = {
  firstName: "Bob",
  lastName: "Williams",
  fullTimeEmployee: false,
  yearsOfExperience: 3,
  location: "Los Angeles",
  numberOfJobs: 2,
};

let teacher3: teacher = {
  firstName: "Charlie",
  lastName: "Brown",
  fullTimeEmployee: true,
  yearsOfExperience: 8,
  location: "Chicago",
  contract: true,
};

let director1: Directors = {
  firstName: "Diana",
  lastName: "Prince",
  fullTimeEmployee: true,
  yearsOfExperience: 10,
  location: "Themyscira",
  nameOfDepartment: "Operations",
  numberOfReports: 5,
};

console.log(teacher1);
console.log(teacher2);
console.log(teacher3);
console.log(director1);

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

function printTeacher(firstName: string, lastName: string): string {
  return `${firstName.charAt(0)}. ${lastName}`;
}

console.log(printTeacher("John", "Doe"));
console.log(printTeacher("Jane", "Smith"));

interface studentInterface {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}
class studentClass {
  constructor(firstName: studentInterface, lastName: studentInterface) {
    firstName;
    lastName;
  }
  workOnHomework(): string {
    return "Currently working";
  }

  displayName(this: studentInterface): string {
    return `${this.firstName}`;
  }
}
