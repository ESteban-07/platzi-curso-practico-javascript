const notes = [
    {
        subject: 'Mathematics',
        note: 10,
        credit: 5,
    },
    {
        subject: 'Phisics',
        note: 8,
        credit: 4,
    },
    {
        subject: 'Chemistry',
        note: 7,
        credit: 3,
    },
];

const sumOfNotesWithCredits = notes.reduce((acc, curr) => {
    acc += curr.note * curr.credit;
    return acc;
}, 0);

const credits = notes.map((item) => item.credit);

const sumOfCredits = credits.reduce((acc, curr) => acc + curr, 0);

const result = sumOfNotesWithCredits / sumOfCredits;

console.log(result);
