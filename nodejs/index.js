/*
What is Node.js?
> Node.js is an open source server environment
> Node.js is free
> Node.js runs on various platforms (Windows, Linux, Unix, Mac OS X, etc.)
> Node.js uses JavaScript on the server
*/

// node js

// importing modules
// pre build modules: path, fs, http, url, querystring

const path = require("path");

console.log(path.join(__dirname, "public/index.html"));

// console.log(__dirname); // will give the path of the current directory
// console.log(__filename); // will give the path of the current file