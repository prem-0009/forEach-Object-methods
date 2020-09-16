console.clear();
//loop through the object using forEach so that it logs, (eg,for user1)
//'user1 is called Jon and is 23 years old'
//the loop should not return a data structure
// Use one or more of the object methods to solve
const obj = {
  user1: {
    name: "Jon",
    age: 23,
  },
  user2: {
    name: "Jen",
    age: 25,
  },
  user3: {
    name: "Jan",
    age: 21,
  },
};

let obj1 = Object.entries(obj).forEach((item) => {
  console.log(
    `${item[0]} is called ${item[1].name} and is ${item[1].age} years old.`
  );
});

//2
// Use Object Methods
//Create an albphabeticl list of every folder in the documents object (the keys are the folders)
//Create a list of every file in the documents object. one list.
const documents = {
  taxes: ["2010.xlx", "2020.xlx"],
  records: ["rec1.docx", "rec2.docx", "rec3.docx"],
  miscellaneous: ["pic.jpg", "passwords.pdf", "docs.txt"],
  Clubhouse: ["paty.jpg", "christmasRules.pdf", "pool.txt"],
};

let folders = Object.keys(documents).sort();
console.log("second task-1:\n list of folders\n", folders);

let oneList = Object.values(documents).reduce((acc, curr) => acc.concat(curr));
console.log("second task-2:\n list of files: \n", oneList);

//3
//Are the two books alike? Create a function and Use Object methods to find out. Change object values to test for non-alike objects
const book1 = {
  title: "My Book",
  author: "John Doe",
  year: "2019",
};
const book2 = {
  title: "My Book",
  author: "John Doe",
  year: "2019",
};

const areTheAlike = function (bok1, bok2) {
  let book1Values = Object.values(bok1);
  let book2Values = Object.values(bok2);

  return book1Values.reduce((acc, curr, i, arr) => {
    return book2Values[i] === curr
      ? "Yes they are alike."
      : "No they are not alike.";
  });
};
console.log("third: are they alike ? \n", areTheAlike(book1, book2));
