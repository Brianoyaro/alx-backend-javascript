namespace Subjects {
    export interface Teacher {
        //firstName: string,
        //lastName: string,
        experienceTeachingReact?: number,
    }
    class React extends Subject {
        public getRequirements(): string {
            return "Here is the list of requirements for React"
        }
        public getAvailableTeacher(): string {
            if (this.teacher.experienceTeachingC) {
                return `Available Teacher: ${this.teacher}`;
            } else {
                return "No available teacher"
            }
        }
    }
}