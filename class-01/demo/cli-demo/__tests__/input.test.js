'use strict';

jest.mock('minimist');
const minimist = require('minimist');
const Input = require('../lib/input.js');

minimist.mockImplementation( ()=> {
  return {
    u: ':8080',
    m: 'post',
    b: 'test body',
    h: 'test header'
  }
});

describe('Input Module', () => {
  it('getMethod() uses a proper method when specified', () => {
    let options = new Input();
    expect(options.getMethod('get')).toEqual('get');
    expect(options.getMethod('post')).toEqual('post');
    expect(options.getMethod('put')).toEqual('put');
    expect(options.getMethod('delete')).toEqual('delete');
  });

  it('getURL() returns undefined if an invalid URL is present', () => {
    let options = new Input();
    expect(options.getURL('not-a-url')).toBeUndefined();
  });

  // BELOW:
  // Additional tests for review - these were not created in lecture

  it('getMethod() defaults to "GET" when no method is specified', () => {
    let options = new Input();
    expect(options.getMethod()).toEqual('GET');
  });

  it('getURL() returns undefined if not specified', () => {
    let options = new Input();
    expect(options.getURL()).toBeUndefined();
  });

  it('getURL() returns undefined if an invalid URL is presented', () => {
    let options = new Input();
    expect(options.getURL('foobar')).toBeUndefined();
  });

  it('getURL() returns localhost if only a :port presented', () => {
    let options = new Input();
    expect(options.getURL(':3000')).toEqual('http://localhost:3000');
  });

  it('getURL() returns a properly formatted URL when presented', () => {
    let options = new Input();
    let url = 'http://www.foo.com';
    expect(options.getURL(url)).toEqual(url);
  });

  it('getBody() returns undefined if not specified', () => {
    let options = new Input();
    expect(options.getBody()).toBeUndefined();
  });

  it('getBody() returns JSON if an stringified object is presented', () => {
    let options = new Input();
    let obj = { name: 'john' };
    let str = JSON.stringify(obj);
    expect(options.getBody(str)).toEqual(obj);
  });

  it('getBody() returns a string if a non-object is presented', () => {
    let options = new Input();
    let str = 'This is a test'
    expect(options.getBody(str)).toEqual(str);
  });

  it('valid() respects a proper object', () => {
    let options = new Input();
    expect(options.valid()).toBeTruthy();
  });

  it('valid() rejects an invalid object', () => {
    let options = new Input();
    options.url = undefined;
    expect(options.valid()).toBeFalsy();
  });
});


