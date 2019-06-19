export { Validate } from "./validate.mjs";
import { Validate } from "./validate.mjs";

export class GradebooksModel {

    constructor(groupObj, teacherObj, lmsObj){
        this.group = groupObj;
        this.teacher = teacherObj;
        this.lms = lmsObj;

        this.gradebookMap = new Map();
    }

    add(level, groupID){
        const date = new Date();
        const gradebookEntry = {
            level,
            records: [],
        }
        const gradebookID = String((level * 74 )+ 79 * date.getTime())
        this.gradebookMap.set(gradebookID, gradebookEntry);
        this.groupID = groupID;
        return gradebookID;
    }

    clear(){
        this.gradebookMap.clear();
    }

    addRecord(gradebookID, record){
        const recordScheme = {
            pupilId: 'string',
            teacherId: 'string',
            subjectId: 'string',
            lesson: 'number',
            mark: 'number'
        }

        if (Validate.validate(record, recordScheme)){
            this.gradebookMap.get(gradebookID).records.push(record);
        }
        else {
            throw Error ('Invalid record entry.')
        }
    }

    read(gradebookID, pupilID){

        const readObj = {
            name: '',
            records: [],
        }
        
        const gradebookObj = gradebookMap.get(gradebookID);

        for (let i of gradebookObj.records) {
            if (i.pupilId === pupilID){
                // readObj.name = group.first + i.name.last;
                // Get the name and record.
            }
        }

    }

    readAll(){

    }

}