export class Subject {
    _id: string;
    name: string;
    students: string;  

    constructor(_id='',name ='', students =''){
        this._id = _id;
        this.name = name;
        this.students = students;
    }
}