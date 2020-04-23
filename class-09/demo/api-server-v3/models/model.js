'use strict';

// generic aka dynamic model
class Model {
  constructor(schema) {
    this.schema = schema;
  }

  // the get method is a "read" CRUD operation
  // if we give it an id of item we want to retrieve - get that item
  // if we give it no id -> give me all data in that collection
  get(id) {
    if(id) {
      return this.schema.findById(id);
    } else {
      return this.schema.find({});
    }
  }

  // the post method here is a "create" CRUD operation
  // it will create a new record (aka database item) and then save it to the db
  post(record) {
    let newRecord = new this.schema(record);
    return newRecord.save();
  }
}

module.exports = Model;