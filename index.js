const http = require("http");
var pdf = require("pdf-creator-node");
var fs = require("fs");

const server = http.createServer((req, res) => {
  // Read HTML Template
  var html = fs.readFileSync("template.html", "utf8");

  // Create PDF document
  var document = {
    html: html,
    path: "./output.pdf",
    data: {
      users: [
        {
          name: "Zul",
          age: "25",
        },
      ],
    },
  };

  let options = {
    format: "A4",
    orientation: "portrait",
    border: "10mm",
  };

  pdf.create(document, options).then((result) => {
    console.log(result);
    res.writeHead(200, { "Content-Type": "application/pdf" });
    var filestream = fs.createReadStream("./output.pdf");
    filestream.pipe(res);
  });
});

server.listen(3000, () => {
  console.log("Server listening on port 3000");
});
