import logUpdate from 'log-update';

import server from '../../server';

logUpdate('\n Defining query APIs. \n');

server.defineAPI({
  method: 'GET',
  route: '/report/:skip/:limit',
  cypherQueryFile: './cypher/articles.cyp'
});

