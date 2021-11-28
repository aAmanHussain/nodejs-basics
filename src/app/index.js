const { createServer } = require('http');
const { requestHandler } = require('./routes');
const { transformRequest, initEnvironment } = require('./utils');

(() => {
  initEnvironment();
  const server = createServer((req, res) => {});

  server.on('checkContinue', async (req, res) => console.log('checkContinue'));
  server.on('checkExpectation', async (req, res) =>
    console.log('checkExpectation')
  );
  server.on('clientError', async (req, res) => console.log('clientError'));
  server.on('close', async (req, res) => console.log('close'));
  server.on('connect', (req, res) => console.log('connect'));
  server.on('connection', async (req, res) => console.log('connection'));
  server.on('error', async (req, res) => console.log('error'));
  server.on('listening', async (req, res) => console.log('listening'));
  server.on('request', async (req, res) => {
    req = await transformRequest(req);
    return requestHandler(req, res);
  });
  server.on('upgrade', async (req, res) => console.log('upgrade'));

  server.listen(process.env.PORT, process.env.HOSTNAME, null, () => {
    console.log(`Server started on PORT: ${process.env.PORT}`);
  });
})();
