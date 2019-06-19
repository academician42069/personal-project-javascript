export class Validate {

    static async validate(obj, scheme){

        for (let i of Object.keys(scheme)){
            if (!obj.hasOwnProperty(i)){
                // console.log(`missing property: ${i}`);
                return false;
            }
            if (Array.isArray(scheme[i])){
                // console.log(`is array: ${i}`);
                for (let j of scheme[i]){
                    // console.log(obj[i]);
                    for (let counter = 0; counter < obj[i].length; counter++){
                        // console.log("doing recursion");
                        if (!this.validate(obj[i][counter], j)){
                            // console.log(`Failed to validate obj ${j}`);
                            return false;
                        }
                        else {
                            // console.log(`Validated obj '${j}'`)
                            continue;
                        }
                    }
                }
            }
            if (typeof obj[i] === 'object'){
                if (!this.validate(obj[i], scheme[i])){
                    // console.log(`Failed to validate obj ${obj[i]}`);
                    return false;
                }
                else {
                    // console.log(`Validated obj '${i}'`)
                    continue;
                }
            }
            if (typeof obj[i] !== scheme[i]){
                // console.log(`wrong type: ${i}`);
                // console.log(typeof obj[i]);
                // console.log(typeof scheme[i]);
                return false;
            }
            // console.log(`validated property ${i}`)

            if (i === 'dateOfBirth'){
                if (!this.validateDate(obj[i])){
                    return false;
                }
            }
            if (i === 'email') {
                if (!this.validateEmail(obj[i])){
                    return false;
                }
            }
            if (i === 'sex') {
                if (!this.validateSex(obj[i])){
                    return false;
                }
            }
        }

        return true;

    }

    static async validateDate(dateString){
        return dateString.match(/\d{4}-([01])(\d)-\d{2}/);
    }

    static async validateEmail(emailString){
        return emailString.match(/\w+@\w+\.\w+/);
        // return true;
    }

    static async validateSex(sexString){
        const booln = ((sexString === 'male') || (sexString === 'female'));
        return booln;
    }

}