// import { renderHTML } from "./Page";
const http = require("http");
// const Page = require('./Page');
const { handleRequest } = require("./handle");

//create a server object:
http.createServer(handleRequest).listen(8080); //the server object listens on port 8080
