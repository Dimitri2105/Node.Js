const fs = require("fs");

const requestHandler = (request,response) =>{
    const url = request.url;
    const method = request.method;
    if (url === "/") {
        fs.readFile('message.txt',(err,data) =>{
        response.write("<html>");
        response.write(`<body>${data}</body>`)
        response.write("<br>")
        response.write("<head> Enter Message </head");
        response.write(
          '<body><form action="/message" method = "POST"><input type = "text" name="message"><button>Submit</button><</form></body>'
        );
        response.write("</html>");
        return response.end();
    
        })
        
      }
    
      else if (url === "/message" && method === "POST") {
        const body = [];
        request.on("data", (chunk) => {
          body.push(chunk);
        });
        return request.on("end", () => {
          const parsedBody = Buffer.concat(body).toString();
          const message = parsedBody.split("=")[1];
    
          fs.writeFile("message.txt", message, () => {
            response.statusCode = 302;
            response.setHeader("Location", "/");
            return response.end();
          });
        });
      }
      else{
      response.setHeader("Content-Type", "text/html");
      response.write("<html>");
      response.write("<head> My Page </head");
      response.write("<body><h1> Welcome to About Us page</h1></body>");
      response.write("</html>");
      response.end();
    
      }

}

module.exports = requestHandler

