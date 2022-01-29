const express = require('express');
const consola = require('consola');
const { Nuxt, Builder } = require('nuxt');
const app = express();
const config = require('../nuxt.config.ts');
config.dev = process.env.NODE_ENV !== 'production';
async function start() {
  const nuxt = new Nuxt(config);
  const host = nuxt.options.server.host || '0.0.0.0';
  const port = nuxt.options.server.port || 333;

  await nuxt.ready();
  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt);
    await builder.build();
  }

  // Give nuxt middleware to express
  app.use(nuxt.render);

  // Listen the server
  app.listen(port, host);
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  });
}
start();
