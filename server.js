import KoaNeo4jApp from 'koa-neo4j';

import logUpdate from 'log-update';

logUpdate('\n Status: \n   Starting server instance. \n');

const server = new KoaNeo4jApp({
  neo4j: {
    boltUrl: process.env.BOLT_URL,
    user: process.env.NEO4J_USER,
    password: process.env.NEO4J_PASSWORD
  },
  cors: {
    credentials: false
  }
});

export default server;
