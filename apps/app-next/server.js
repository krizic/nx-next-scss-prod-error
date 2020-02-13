const http = require('http');

const startServer = async (nextApp, options) => {
  const handle = nextApp.getRequestHandler();
  await nextApp.prepare();
  const server = http.createServer((req, res) => {
    handle(req, res);
  });
  return new Promise((resolve, reject) => {
    server.listen(options.port, error => {
      if (error) {
        reject(error);
        return; 
      }
      resolve();
    });
  });
};

module.exports = startServer;