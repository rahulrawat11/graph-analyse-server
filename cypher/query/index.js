import logUpdate from 'log-update';

import server from '../../server';

logUpdate('\n Status: \n   Defining query APIs. \n');

server.defineAPI({
  method: 'GET',
  route: '/reports/:skip/:limit',
  cypherQueryFile: './cypher/query/reports.cypher'
});

