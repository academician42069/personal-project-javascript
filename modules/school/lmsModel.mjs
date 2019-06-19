export class LMSModel {

    constructor() {
        this.subjMap = new Map();
    }

    add(subject) {
        if (subject.id !== undefined){
            this.subjMap.set(subject.id, subject);
        }
        else {
            throw Error ('the provided argument is not a valid subject. It must be an object with an atribute \'id\'');
        }
    }

    remove(subject) {
        if (subject.id !== undefined){
            this.subjMap.delete(subject.id);
        }
        else {
            throw Error ('the subject with this ID is not in the database');
        }
    }

    update(subject, update) {
        if (subject.id !== undefined){
            let tempSubj = this.subjMap.get(subject.id);
            Object.assign(tempSubj, update);
            this.subjMap.set(subject.id, tempSubj);
        }
        else {
            throw Error ('the subject with this ID is not in the database');
        }
    }

    verify(subject) {
        return this.subjMap.has(subject.id);
    }

    readAll() {
        let tempArray = [];
        this.subjMap.forEach(value => {
            tempArray.push(value) 
        });
        return tempArray;
    }
}
