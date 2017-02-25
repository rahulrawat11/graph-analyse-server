import 'babel-polyfill';
import logUpdate from 'log-update';
import { Logger } from 'eazy-logger';

import server from './server';

import './cypher/mutation';
import './cypher/query';

const logger = Logger({
  prefix: '{blue:[}{magenta:neo4j-analyse-server}{blue:] }',
  useLevelPrefixes: true
});

server.listen(process.env.PORT, () => {
  logUpdate(`\n Status: \n    Server is ready on port ${process.env.PORT}. \n`);
});
