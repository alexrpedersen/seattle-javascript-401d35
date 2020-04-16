'use strict';

const schema = require('./history-schema.js');

class History {
  constructor() {};
  get(_id) {
    if(_id) {
      return schema.findOne({ _id })
    } else {
      return schema.find({});
    }
  }

  create(record) {
    // { method: 'GET', url: 'http://localhost:3000', body: undefined, headers: undefined }
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

module.exports = new History();