interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }

  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }

  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }

  getCoffeeBreak(): string {
    return "Cannot have a break";
  }

  workTeacherTasks(): string {
    return "Getting to work";
  }
}

const createEmployee = (salary: number | string): Director | Teacher => {
  if (typeof salary === "number") {
    if (salary < 500) {
      return new Teacher();
    }
  }
  return new Director();
};

console.log(createEmployee(200));

console.log(createEmployee(1000));

console.log(createEmployee("$500"));

function isDirector(employee: Director | Teacher): employee is Director {
  return employee instanceof Director;
}

const executeWork = (employee: Director | Teacher): string => {
  // if (employee instanceof Director) {
  //     return employee.workDirectorTasks();
  // }
  // return employee.workTeacherTask();
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  }
  return employee.workTeacherTasks();
};

// 1. Write a String literal type named Subjects
type Subjects = "Math" | "History";

// 2. Write a function named teachClass
function teachClass(todayClass: Subjects): string {
  if (todayClass === "Math") {
    return "Teaching Math";
  } else {
    // todayClass must be "History"
    return "Teaching History";
  }
}
