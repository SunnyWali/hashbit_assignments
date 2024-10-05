const students = [
    { name: "Ram", scores: [80, 70, 60] },
    { name: "Mohan", scores: [80, 70, 90] },
    { name: "Sai", scores: [60, 70, 80] },
    { name: "Hemang", scores: [90, 90, 80, 80] },
    ];
    // Output = [
    // { name: "Ram", average: 70 },
    // { name: "Mohan", average: 80 },
    // { name: "Sai", average: 70 },
    // { name: "Hemang", average: 85 },
    // ];
    // Use array.map and array.reduce.
    
  
//    function calculateAverage(students)
//    {
//     return students.map((student)=>
//     {
//         const total=student.scores.reduce((sum,score)=>sum+score,0);
//         const average=total/student.scores.length;
//         return {name:student.name, average:average};
//     });
//    }
//    const ans=calculateAverage(students);
//    console.log(ans);

function calculateAverage(students)
{
    return students.map((student)=>
    {
        const total=student.scores.reduce((sum,score)=>sum+score,0);
        const average=total/student.scores.length;
        return {
            name:student.name,
            averageScore:average
        };
    })
}
const ans=calculateAverage(students);
console.log(ans);

  
//   const averageScores = calculateAverageScores(students);
//   console.log(averageScores);