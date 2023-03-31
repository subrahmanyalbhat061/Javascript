import Book from "./class.js"

const date=new Date("2022-03-25");
const date1=new Date();
const date2=new Date();
const date3=new Date();
const date4=new Date();


const Book1=new Book(
    "JavaProgramming",
    "xyz",
    450,
    date,
    500,
    "Technical"
);
const Book2=new Book(
    "CProgramming",
    "ccc",
    350,
    date1,
    400,
    "Technical"
);
const Book3=new Book(
    "JavascriptProgramming",
    "xxx",
    550,
    date2,
    600,
    "Technical"
);
const Book4=new Book(
    "Meditation",
    "Marcus Aurelius",
    650,
    date3,
    700,
    "Motivational"
);
const Book5=new Book(
    "PythonProgramming",
    "zzz",
    1050,
    date4,
    700,
    "Technical"
);

const Books=[Book1,Book2,Book3,Book4,Book5];
for(let i=0;i<Books.length;i++){
    console.log(Books[i]);
}
console.log(Books);

