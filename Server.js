const http = require("http");
const route = require("./route")
const { DEFAULT_ENCODING } = require("crypto");

const server = http.createServer(route);

server.listen(3000);
