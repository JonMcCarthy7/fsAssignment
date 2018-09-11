var fs = require("fs");
var path = require("path");

// fs.readFile("./challenge1/info.txt", "utf8", (err, res) => {
//   if (err) {
//     throw err;
//   }
//   console.log(res);
// });

// let txt = fs.readFileSync("./challenge2/info.txt", "utf8");
// fs.writeFileSync(
//   "./challenge2/info.txt",
//   `${txt} Text added to the end of the file...`
// );

// fs.rename("./challenge3/binfo.txt", "./challenge3/info.txt", err => {
//   if (err) {
//     throw err;
//   }
// });

// fs.mkdirSync("./challenge4/copyfolder");
// fs.copyFile(
//   "./challenge4/info.txt",
//   "./challenge4/copyfolder/info.txt",
//   err => {
//     if (err) {
//       throw err;
//     }
//   }
// );

// let txt5 = fs.readFileSync("./challenge5/info.txt", "utf8");
// fs.writeFileSync("./challenge5/info.txt", `${txt5.replace(/\-+/g, " ")}`);

console.log(
  fs.readdir("./challenge6", "utf8", (err, files) => {
    if (err) {
      throw err;
    } else {
      files.forEach(el => {
        if (path.extname(el) === ".txt") {
          console.log(el);
        }
      });
    }
  })
);
