const fs = require("fs-extra");

// Path to the build folder
const buildPath = "./build";

// Content of the _redirects file
const redirectsContent = "/* /index.html 200";

// Write the _redirects file to the build folder
fs.writeFileSync(`${buildPath}/_redirects`, redirectsContent);

console.log("Added _redirects file to the build folder.");
