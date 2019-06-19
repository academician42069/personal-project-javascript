export class LMSModel {

    constructor() {
        this.subjMap = new Map();
    }

    async add(subject) {
        if (subject.id !== undefined){
            this.subjMap.set(subject.id, subject);
        }
        else {
            throw Error ('the provided argument is not a valid subject. It must be an object with an atribute \'id\'');
        }
    }

    async remove(subject) {
        if (subject.id !== undefined){
            this.subjMap.delete(subject.id);
        }
        else {
            throw Error ('the subject with this ID is not in the database');
        }
    }

    async update(subject, update) {
        if (subject.id !== undefined){
            let tempSubj = this.subjMap.get(subject.id);
            Object.assign(tempSubj, update);
            this.subjMap.set(subject.id, tempSubj);
        }
        else {
            throw Error ('the subject with this ID is not in the database');
        }
    }

    async verify(subject) {
        return this.subjMap.has(subject.id);
    }

    async readAll() {
        let tempArray = [];
        this.subjMap.forEach(value => {
            tempArray.push(value) 
        });
        return tempArray;
    }
}
