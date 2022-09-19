
// const fs = require("fs/promises");
import fs from "fs/promises";

// делать через промис
// fs.readFile("text.txt")
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error.message));

// делать через трай катч

//    операция чтения
// const operation = async ({ action }) => {
//   switch (action) {
//     case "read":
//       const result = await fs.readFile("text.txt", "utf-8"); // файл/формат вывода
//       console.log(result); // или в рид добавить тоСтринг
//       break;
//     case "add":
//       const add = fs.appendFile("text.txt", data); // файл и данные записи
//       console.log(add); // ниче не вернет , но файл изменится
//     case "replace":
//       const update = fs.writeFile("text.txt", data);
//       console.log(update); // ниче не вернет , но файл изменится
//     default:
//       console.log("ниче не вышло");
//   }
// };
// operation({ action: "read" }); // читает
// operation({ action: "add", data: "\nthis is new QWE" }); // \n - перенос на новую строку // добовляет в уже существуещее
// operation({ action: "replace", data: "this is new QWE QWE" }); // заменят все на новое

// добавления
const operation = async ({ action, data }) => {
  switch (action) {
    case "read":
      const read = await fs.readFile("text.txt", "utf-8"); // файл/формат вывода
      console.log(read); // или в рид добавить тоСтринг
      break;
    case "add":
      const add = fs.appendFile("text.txt", data);
      console.log(add);
      case "replace":
        const update = fs.writeFile("text.txt" , data);
        console.log(update)
    default:
      console.log("ниче не вышло");
  }
};
operation({ action: "replace", data: "this is new QWE QWE" });


