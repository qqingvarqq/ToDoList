/*
    Define our Task class
*/
export class Task {
    public _id = "";
    constructor(public title: string,
        public description: string,
        public deadline: Date,
        public status: boolean) {
    }
}
