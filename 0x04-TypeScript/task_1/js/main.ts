interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

interface Director extends Teacher {
  numberOfReports: number;
}

let teacher1: Teacher = {
  firstName: "Alice",
  lastName: "Johnson",
  fullTimeEmployee: true,
  yearsOfExperience: 5,
  location: "New York",
  favoriteSubject: "Mathematics",
};

let teacher2: Teacher = {
  firstName: "Bob",
  lastName: "Williams",
  fullTimeEmployee: false,
  yearsOfExperience: 3,
  location: "Los Angeles",
  numberOfJobs: 2,
};

let teacher3: Teacher = {
  firstName: "Charlie",
  lastName: "Brown",
  fullTimeEmployee: true,
  yearsOfExperience: 8,
  location: "Chicago",
  contract: true,
};

let director1: Director = {
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

const printTeacher: printTeacherFunction = function (firstName, lastName) {
  return `${firstName}. ${lastName}`;
};

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

console.log(printTeacher("John", "Doe"));
console.log(printTeacher("Jane", "Smith"));

interface studentInterface {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

interface StudentConstructor {
  firstName: string;
  lastName: string;
}

class StudentClass {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}
