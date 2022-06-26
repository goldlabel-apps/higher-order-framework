## Static assets node server

https://expressjs.com/en/api.html#res

#### serve-static

> This is a Node.js module available through the npm registry. Installation is done using the npm install command: `npm install serve-static` [docs](https://www.npmjs.com/package/serve-static)

#### finalhandler

https://www.npmjs.com/package/finalhandler

```javascript
var finalhandler = require("finalhandler");
var http = require("http");
var serveStatic = require("serve-static");

var serve = serveStatic("public");

var server = http.createServer(function (req, res) {
  var done = finalhandler(req, res);
  serve(req, res, done);
});

server.listen(3000);
```
