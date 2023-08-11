const fs = require("fs");

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === "/") {
      res.write("<html>");
      res.write("<head><title>Form</title><head>");
      res.write(
        `<body><form action="/message" method="POST"><input type="text" name = "message"/><button type="submit">Submit</button></form><body>`
      );
      res.write("</html>");
      return res.end();
    }
  
    if (url === "/message" && method === "POST") {
      const body = [];
      req.on('data', (chunk) => {
          body.push(chunk);
      });
      return req.on('end', () => {
          const parsedBody = Buffer.concat(body);
          const message = parsedBody.toString().replaceAll('+', ' ');
          fs.writeFile("message.txt", message, (err) => {
              res.statusCode = 302;
              res.setHeader("location", "/");
              return res.end();
          });
      });
    }
}

// --- different ways to import a function ---

// module.exports = requestHandler;

// module.exports = {
//     handler : requestHandler,
//     someText: "Some hard coded text"
// }

//  module.exports.handler = requestHandler;
//  module.exports.someText = "Some hard coded text";
 
 exports.handler = requestHandler;
 exports.someText = "Some hard coded text";

