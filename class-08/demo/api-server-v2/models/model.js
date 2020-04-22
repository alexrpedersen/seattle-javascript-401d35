'use strict';

// this is meant for CRUD & DB interactions
class Model {
  constructor(schema) {
    this.schema = schema;
  }

  get(_id) {
    // read CRUD operation
    let queryObject = _id ? { _id } : {};
    return this.schema.find(queryObject);
  }

  create(record) {
    // create CRUD operation
    let newRecord = new this.schema(record);
    return newRecord.save();
  }

  update(_id, record) {
    // update CRUD operation
    return this.schema.findByIdAndUpdate(_id, record, { new: true });
  }

  delete(_id) {
    // destroy CRUD operation
    return this.schema.findByIdAndDelete(_id);
  }
}

module.exports = Model;