'use strict';

const mongoose = require('mongoose'); // meant to connect us to mongodb - do CRUD
const MONGODB_URI = 'mongodb://localhost:27017/food-db'; // location of your db
const Food = require('./models/food-schema.js'); // pulls in our Food model for instantiation of food items later on

// bring in the food model (constructor)
// instantiate new food items - apple, pizza
// we will do CRUD on our food-db database for the food items above

mongoose.connect(MONGODB_URI, { userNewUrlParser: true, useUnifiedTopology: true });

const testDbStuff = async () => {
  let pizza = {
    name: 'salami pizza 6',
    calories: 400,
  }
  
  let pizzaItem = new Food(pizza);
  
  pizzaItem.save();

  let oneApple = await Food.findById('5e974402046d6ed2c0141722');
  console.log('found from db', oneApple);

  let allApples = await Food.find({});
  console.log('all apples', allApples);
}

testDbStuff();