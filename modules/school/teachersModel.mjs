export { Validate } from './validate';
import { Validate } from './validate';

export class TeachersModel {

    constructor() {
        this.teacherMap = new Map();
    }

     add(obj) {
        if (this.isTeacherValid(obj)) {
            const date = new Date();
            obj.id = obj.name.first + obj.name.last + String(60 * date.getTime());
            this.teacherMap.set(obj.id, obj);
            return obj.id;
        }
        else {
            throw Error ('Invalid format.')
        }
    }

    isTeacherValid(obj) {
        const scheme = {
            "name": {
                "first": "string",
                "last": "string"
            },
            "image": "string",
            "dateOfBirth": "string",
            "emails": [
                {
                    "email": "string",
                    "primary": "boolean"
                }
            ],
            "phones": [
                {
                    "phone": "string",
                    "primary": "boolean"
                }
            ],
            "sex": "string",
            "subjects": [
                {
                    "subject": "string"
                }
            ],
            "description": "string",
        }

        return Validate.validate(obj, scheme);
    }

     read(id){
        let thisTeacher =  this.teacherMap.get(id);
        if (thisTeacher !== undefined){
            return thisTeacher;
        }
        else {
            throw Error ('There is no teacher with this ID.')
        }
    }

     update(id, update){
        if (this.teacherMap.get(id) !== undefined) {
            if (this.isTeacherValid(update)){
                return this.teacherMap.set(id, update);
            }
            else {
                throw Error ('The supplied object is not valid.')
            }
        }
        else {
            throw Error ('There is no teacher with this ID')
        }
    }

     remove(id) {
        if (this.teacherMap.get(id) !== undefined) {
            return this.teacherMap.delete(id);
        }
        else {
            throw Error ('There is no teacher with this ID')
        }
    }
}
