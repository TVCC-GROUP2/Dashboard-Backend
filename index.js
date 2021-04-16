const cluster = require('cluster');
const numWorkers = require('os').cpus().length;
const express = require('express');
const mws = require('./config/middleware');
const routes = require('./app/routes/index');
const { port, env } = require('./config/config');

const app = express();
require('dotenv').config();
// use middlewares
app.use(mws);
// parse body params and attache them to req.body

app.use('/v1/analytics', routes.analytics);


// routes should be listed here

if (cluster.isMaster) {
  console.log(`Master cluster setting up ${numWorkers} workers...`);

  for (let i = 0; i < numWorkers; i++) {
    cluster.fork();
  }

  cluster.on('online', (worker) => {
    console.log(`Worker ${worker.process.pid} is online`);
  });

  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died with code: ${code}, and signal: ${signal}`);
    console.log('Starting a new worker');
    cluster.fork();
  });
} else {
  app.listen(port, () => console.info(`server started on port ${port} (${env})`));
}