/// <reference path="./Subject.ts" />

namespace Subjects {
  // Add experienceTeachingJava to the Teacher interface
  export interface Teacher {
    experienceTeachingJava?: number;
  }
  export class Java extends Subject {
    public getRequirements(): string {
      return "Here is the list of requirements for Java";
    }
    public getAvailableTeacher(): string {
      // Check if a teacher is assigned AND if they have experienceTeachingJava
      if (this.teacher?.experienceTeachingJava > 0) {
        return `Available Teacher: ${this.teacher.firstName}`;
      }
      return "No available teacher";
    }
  }
}
