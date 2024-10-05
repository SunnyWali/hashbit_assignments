const students = [
  (student1 = {
    subject1: 44,
    subject2: 56,
    subject3: 87,
    subject4: 97,
    subject5: 37,
  }),
  (student2 = {
    subject1: 44,
    subject2: 56,
    subject3: 87,
    subject4: 97,
    subject5: 37,
  }),
  (student3 = {
    subject1: 44,
    subject2: 56,
    subject3: 87,
    subject4: 97,
    subject5: 37,
  }),
];

// Output: -
// [
//     student1: {
//         average: 44
//     },
//     student2: {
//         average: 44
//     },
//     student3: {
//         average: 44
//     }
// ]
function calculateAverage(students) {
  let result = {};
  Object.keys(students).forEach((student) => {
    let subjects = students[student];
    let score = Object.values(subjects);
    let total = score.reduce((score, total) => score + total, 0);
    let average = total / score.length;
    result[student] = {
      averageScore: average,
    };
  });
  return result;
}

console.log(calculateAverage(students));
