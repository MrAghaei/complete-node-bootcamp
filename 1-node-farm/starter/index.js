const fs = require("fs");

const textIn = fs.readFileSync("./txt/input.txt", "UTF-8");
console.log(textIn);

const textOut = `This is the new text: ${textIn}`;
fs.writeFileSync("./txt/output.txt", textOut);
