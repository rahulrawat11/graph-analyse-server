import logUpdate from 'log-update';

import server from '../../server';


logUpdate('\n Defining mutation APIs. \n');

server.defineAPI({
  method: 'POST',
  route: '/report',
  cypherQueryFile: './cypher/mutation/addReport.cypher'
});


