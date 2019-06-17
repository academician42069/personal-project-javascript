export class TeachersModel {
    constructor(metadataObj) {
        if (this.isTeacherValid(metadataObj)){
            const date = new Date();
            Object.assign(this, metadataObj);
            this.id = this.name.first + this.name.last + String(60 * date.getTime());
        }
    }

    isTeacherValid(obj){
        return true;
    }
}
