import 'babel-polyfill';
import logUpdate from 'log-update';
import { Logger } from 'eazy-logger';

import server from './server';


const logger = Logger({
  prefix: '{blue:[}{magenta:neo4j-analyse-server}{blue:] }',
  useLevelPrefixes: true
});

logUpdate('\n Server is ready. \n');
server.listen(3000, () => {
  logger.info('App listening on port 3000.');
});
