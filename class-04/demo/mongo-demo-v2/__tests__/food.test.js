'use strict';

// this module will spin up an in-memory database and allow us to connect to it
// if we were to use the superagent capabilities -> we would need to reassign to variable
require('@code-fellows/supergoose');

const Food = require('../models/food-model.js');
const food = new Food();

describe('Food Module:', () => {
  it('can create() a new food item', () => {
    let testItem = { name: 'test food item', calories: 77, type: 'MEAT' };
    return food.create(testItem)
      .then(record => {
        // test that the item was created
        Object.keys(testItem).forEach(key => {
          // record[key] => props on the actual db record
          // testItem[key] => props on the test item from above (in my test)
          expect(record[key]).toEqual(testItem[key]);
        })
      })
  });

  it('can get() a food item', () => {
    let testItem = { name: 'test food 2', calories: 99, type: 'FRUIT'};
    return food.create(testItem)
      .then(record => {
        // _id comes from the record we created above - given to us by mongodb
        food.get(record._id)
          .then(item => {
            Object.keys(testItem).forEach(item => {
              expect(foodItem[item]).toEqual(testItem[item]);
            });
          })
      })
  });
})