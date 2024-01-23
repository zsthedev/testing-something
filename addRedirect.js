const fs = require("fs-extra");

const buildPath = "./build";

const redirectsContent = "/* /index.html 200";

fs.writeFileSync(`${buildPath}/_redirects`, redirectsContent);

console.log("Added _redirects file to the build folder.");
