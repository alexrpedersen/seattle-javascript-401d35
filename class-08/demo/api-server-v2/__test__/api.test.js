const { server } = require('../lib/server.js');
const supergoose = require('@code-fellows/supergoose');
const mockRequest = supergoose(server);

describe('FOOD API', () => {
  it('can post() a new food item', () => {
    // this is a test object to save to the db
    let testItem = { name: 'apple', calories: 35, type: 'FRUIT' };
    return mockRequest.post('/api/v1/food')
      .send(testItem)
      .then(data => {
        // this is the returned object from the db
        let record = data.body;
        // comparing our test obj with the returned obj from the db
        Object.keys(testItem).forEach(key => {
          expect(record[key]).toEqual(testItem[key]);
        });
      })
  });

  it('can get() food items', () => {
    let testItem = { name: 'apple', calories: 35, type: 'FRUIT' };
    return mockRequest.post('/api/v1/food')
      .send(testItem)
      .then(data => {
        return mockRequest.get('/api/v1/food')
          .then(record => {
            Object.keys(testItem).forEach(key => {
              console.log('record:', record.body);
              expect(record.body[1][key]).toEqual(testItem[key])
            });
          });
      });
  });
});