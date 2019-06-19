export class GroupsModel {

    constructor(){
        this.groupMap = new Map();
        this.pupilMap = new Map();
    }

    add(roomNumber){
        if (typeof roomNumber != 'number'){
            throw Error ('You must specifiy a room number')
        }
        const date = new Date();
        const id = roomNumber * 31 * date.getTime();
        const groupObj = {
            id,
            room: roomNumber,
        }
        this.groupMap.set(id, groupObj);
        return id;
    }

    addPupil(groupID, pupil){
        const pupilGroup = this.groupMap.get(groupID);
        if (typeof pupilGroup !== 'object'){
            throw Error ('This group does not exist.')
        }
        this.pupilMap.set(pupil.id, pupil);
    }

    removePupil(groupID, pupilID){
        const pupilGroup = this.groupMap.get(groupID);
        if (typeof pupilGroup !== 'object'){
            throw Error ('This group does not exist.')
        }
        this.pupilMap.delete(pupilID);
    }

    update(groupID, newRoom){
        const pupilGroup = this.groupMap.get(groupID);
        if (typeof pupilGroup === 'object'){
            pupilGroup.room = newRoom.room;
        }
    }

    read(groupID){
        const readGroup = this.groupMap.get(groupID);
        if (typeof readGroup === 'object'){
            return this.groupMap.get(groupID);
        }
        else {
            throw Error ('Invalid group ID.')
        }
    }

    readAll(){
        const tempArray = [];
        this.groupMap.forEach(value => {
            tempArray.push(value);
        })
        return tempArray;
    }
}