const { createServer } = require('http');
const { fork, isMaster } = require('cluster');
const { cpus } = require('os');
const { LogMessageType } = require('./models');
const { requestHandler } = require('./routes');
const { loggerService } = require('./services');
const { transformRequest, initEnvironment } = require('./utils');

(() => {
  initEnvironment();
  const numOfCPUs = cpus();
  if (isMaster && numOfCPUs && numOfCPUs.length) {
    let i = 0;
    while (i++ < numOfCPUs.length) {
      fork();
    }
    return;
  }

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
    const message = `Server started on PORT: ${process.env.PORT} and HOST: ${process.env.HOSTNAME}`;
    console.log(message);
    loggerService.log(message, LogMessageType.info);
  });
})();
