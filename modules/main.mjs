import { 
    SubjectsModel,
    LMSModel,
} from './school/index';
import { TeachersModel } from './school/teachersModel.mjs';

// new SubjectsModel();

const history = new SubjectsModel({
  title: 'History',
  lessons: 24
});

const history1 = new SubjectsModel({
  title: 'History 1',
  lessons: 24,
  description: 'Lorem ipsum dor sit amet.'
});

// console.log(history.id);
// console.log(history1);

const lms = new LMSModel();

// (async () => {
//     lms.add(history);
// })();

// (async () => {
//     lms.add(history1);
// })();

// (async () => {
//     lms.remove(history1);
// })();

// (async () => {
//     const result = await lms.readAll();
//     console.log(result);
// })();

// (async () => {
//     const result = await lms.verify(history);
//     console.log(result);
// })();

// (async () => {
//     lms.update(history, {
//         lessons: 360,
//         description: 'History 0',
//     });
// })();

// (async () => {
//     const result = await lms.readAll();
//     console.log(result);
// })();

const teacher = new TeachersModel({
    "name": {
    "first": "John",
    "last": "Doe"
    },
    "image": "img",
    "dateOfBirth": "1983-09-22", // format date
    "emails": [
    {
        "email": "jdoe@example.com",
        "primary": true
    }
    ],
    "phones": [
    {
        "phone": "+995 569 993 390",
        "primary": true
    }
    ],
    "sex": "male", // male or female
    "subjects": [
    {
        "subject": "History"
    }
    ],
    "description": "A great lad.",
});

console.log(teacher.id);