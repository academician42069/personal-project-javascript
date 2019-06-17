export class SubjectsModel {

    constructor(metadataObj) {
        if (this.isSubjectValid(metadataObj)){
            const date = new Date();
            this.title = metadataObj.title;
            this.lessons = metadataObj.lessons;
            this.id = this.title + String(31 * this.lessons + date.getTime());
            if (typeof metadataObj.description === 'string') {
                this.description = metadataObj.description;
            }
        }
    }

    isSubjectValid(obj) {
        if ( (typeof obj.title !== 'string') || (typeof obj.lessons !== 'number') ) {
            return false;
        }
        else {
            return true;
        }
    }

}