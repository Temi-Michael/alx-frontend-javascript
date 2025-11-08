/// <reference path="./Subject.ts" />

namespace Subjects {
  // Add experienceTeachingReact to the Teacher interface
  export interface Teacher {
    experienceTeachingReact?: number;
  }

  export class React extends Subject {
    public getRequirements(): string {
      return "Here is the list of requirements for React";
    }

    public getAvailableTeacher(): string {
      // Check if a teacher is assigned AND if they have experienceTeachingReact
      if (this.teacher?.experienceTeachingReact > 0) {
        return `Available Teacher: ${this.teacher.firstName}`;
      }
      return "No available teacher";
    }
  }
}
