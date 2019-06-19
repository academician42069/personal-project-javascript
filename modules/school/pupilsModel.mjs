export { Validate } from "./validate.mjs";
import { Validate } from "./validate.mjs";

export class PupilsModel {

    constructor() {
        this.pupilMap = new Map();
    }

    add(obj) {
        if (this.isPupilValid(obj)) {
            const date = new Date();
            obj.id = obj.name.first + obj.name.last + String(73 * date.getTime());
            this.pupilMap.set(obj.id, obj);
            return obj.id;
        }
        else {
            throw Error ('Invalid format.')
        }
    }

    isPupilValid(obj) {
        const scheme = {
            "name": {
                "first": "string",
                "last": "string"
            },
            "image": "string",
            "dateOfBirth": "string",
            "phones": [
                {
                    "phone": "string",
                    "primary": "boolean"
                }
            ],
            "sex": "string",
            "description": "string"
        }

        return Validate.validate(obj, scheme);
    }

    read(id){
        let thisPupil = this.pupilMap.get(id);
        if (thisPupil !== undefined){
            return thisPupil;
        }
        else {
            throw Error ('There is no pupil with this ID.')
        }
    }

    update(id, update){
        if (this.pupilMap.get(id) !== undefined) {
            if (this.isPupilValid(update)){
                this.pupilMap.set(id, update);
            }
            else {
                throw Error ('The supplied object is not valid.')
            }
        }
        else {
            throw Error ('There is no pupil with this ID')
        }
    }

    remove(id) {
        let thisPupil = this.pupilMap.get(id);
        if (thisPupil !== undefined){
            this.pupilMap.delete(id);
        }
        else {
            throw Error ('There is no pupil with this ID.')
        }
    }
}
