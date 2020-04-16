'use strict';

const schema = require('./food-schema.js');

// REST - verbs to use for resource interactions -> GET, POST, PUT, DELETE
// CRUD - verbs to use for database interactions -> create, read, update, delete

class Food {
  constructor() {};

  // get works for 2 possible options
  // 1st option - if we want to "get" or "read" 1 item in the db
  // 2nd option - if we want to "get" or "read" all items of that resource
  get(_id) {
    if(_id) {
      return schema.findOne({ _id })
    } else {
      return schema.find({});
    }
  }

  create(record) {
    // { name: 'new apple', calories: 300, type: 'FRUIT' }
    let newRecord = new schema(record);
    return newRecord.save();
  }

  update(_id, record) {
    return schema.findByIdAndUpdate(_id, record, { new: true });
  }

  delete(_id) {
    return schema.findByIdAndDelete(_id);
  }
}

module.exports = Food;