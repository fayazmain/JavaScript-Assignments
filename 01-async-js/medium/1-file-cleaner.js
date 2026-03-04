// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```
const fs = require("fs");

const filePath = "input.txt";

fs.readFile(filePath, "utf8", function (err, data) {
  if (err) {
    console.log("Error reading file:", err);
    return;
  }

  // Remove extra spaces
  const cleanedData = data.replace(/\s+/g, " ").trim();

  fs.writeFile(filePath, cleanedData, function (err) {
    if (err) {
      console.log("Error writing file:", err);
      return;
    }

    console.log("File cleaned successfully!");
  });
});