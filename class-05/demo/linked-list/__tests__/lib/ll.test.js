'use strict';

const LL = require('../../lib/ll.js');

describe('Linked List Module', () => {
  it('constructor - should create a list', () => {
    let list = new LL();
    expect(list.head).toBeNull();
  });

  it('should add an item to the list - append', () => {
    console.log('empty test');
    let list = new LL();

    let first = 'first item in list';
    list.append(first);

    expect(list.head.value).toEqual(first);

    let second = 'second item in list';
    // list.append(second);

    // expect(list.head.value).toEqual(first);

    console.log('LL:', list);
  })
})