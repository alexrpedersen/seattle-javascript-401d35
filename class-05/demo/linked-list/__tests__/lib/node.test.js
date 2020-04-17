'use strict';

const Node = require('../../lib/node.js');

describe('Node Module', () => {
  it('should create a new node', () => {
    let val = 'test value';
    let node = new Node(val);

    expect(node.value).toEqual(val);
    expect(node.next).toBeNull();
  });
});