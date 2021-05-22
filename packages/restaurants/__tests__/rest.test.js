const request = require('axios');
const server = require('../server.js');
const app = require('../server');

beforeAll(async () => {
  console.log('Jest starting!');
});

afterAll(() => {
  var server = app.listen(3000);
  server.close();
  console.log('server closed!');
});

describe('route tests', () => {
 test('get home route GET /', async () => {
 const response = await request(server).get('/wild');
 expect(response.status).toEqual(200);
 expect(response.type).toEqual("application/json");
 });
});
