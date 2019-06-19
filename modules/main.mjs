import { 
    SubjectsModel,
    LMSModel,
    TeachersModel,
    PupilsModel,
    GroupsModel,
    GradebooksModel,
} from './school/index';

/* Subject */

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

/* LMS */

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

/* Teacher */

const data = {
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
        },
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
};

const teachers = new TeachersModel();

const teacherId = teachers.add(data);
console.log(teachers.read(teacherId));

// teachers.update(teacherId, {
//     "name": {
//         "first": "LOIEIOJ",
//         "last": "Doe"
//     },
//     "image": "img",
//     "dateOfBirth": "1983-09-22", // format date
//     "emails": [
//         {
//             "email": "jdoe@example.com",
//             "primary": true
//         }
//     ],
//     "phones": [
//         {
//             "phone": "+995 569 993 390",
//             "primary": true
//         }
//     ],
//     "sex": "male", // male or female
//     "subjects": [
//         {
//             "subject": "History"
//         }
//     ],
//     "description": "A BAD lad.",
// });

// console.log(teachers.read(teacherId));

// // console.log(teacher);

/* Pupil */

const pupilData = {
  "name": {
    "first": "Rob",
    "last": "Locks"
  },
  "image": "lol.jpg",
  "dateOfBirth": "2013-07-30", // format date
  "phones": [
    {
      "phone": "+995 543 88 02 13",
      "primary": false
    },
  ],
  "sex": "male", // male OR female
  "description": "A splendid player"
}
// all fields are required, except description

// Create new Pupil from Pupil's data
const pupils = new PupilsModel();

// Create a new pupil
const pupilId = pupils.add(pupilData);

// will return Pupils data including pupil's id
// console.log(pupils.read(pupilId));

// will update Pupil. This method should use the same validation as a constructor method
// pupil.update(pupilId, updatedProfile)

// will remove pupil
// pupil.remove(pupilId)

/* Group */

const room = 236;
const groups = new GroupsModel();

// Create a new group
const groupId = groups.add(room);

// Add this pupil to this group (requires pupil object)
groups.addPupil(groupId, pupils.read(pupilId));

// Update room for this group
groups.update(groupId, {
  room: 237
});

// Read information about group
console.log(groups.read(groupId));

// It will return array of groups
// console.log(groups.readAll());

// Remove this pupil from this group (required pupil ID)
// groups.removePupil(groupId, pupilId);

/* Gradebook */

// const pupilId = pupil.id;
// const teacherId = teacherId;
const gradebooks = new GradebooksModel(groups, teachers, lms);

// Create a new gradebook
const level = 1;
const gradebookId = gradebooks.add(level, groupId);

const record = {
  pupilId: pupilId,
  teacherId: teacherId,
  subjectId: history.id,
  lesson: 1,
  mark: 9
};

gradebooks.addRecord(gradebookId, record);

// Read information about oliver results

const rob = gradebooks.read(gradebookId, pupilId);

// {
//   name: 'Oliver Black',
//   records: [
//     {
//       teacher: 'Elizabeth Holms',
//       subject: 'History',
//       lesson: 1,
//       mark: 9
//     }
//   ]
// }

// // Read information about all students in this gradebook
// const students = gradebooks.readAll(gradebookId); // It will return the array of objects

// Destroy all data inside this gradebook
// gradebooks.clear();
