import express from 'express';
import consola from 'consola';
import { Nuxt, Builder } from 'nuxt';
const app = express();
const PORT = process.env.PORT || 3001;
const config = require('../nuxt.config.ts');
config.dev = process.env.NODE_ENV !== 'production';

async function start(): Promise<void> {
  // Init Nuxt.js
  const nuxt = new Nuxt(config);

  const { host } = nuxt.options.server;

  if (config.dev) {
    const builder = new Builder(nuxt);
    await builder.build();
  } else {
    await nuxt.ready();
  }

  app.use(nuxt.render);

  // Listen the server
  app.listen(PORT, host);
  consola.ready({
    message: `Server listening on http://${host}:${PORT}`,
    badge: true
  });
}
start();
