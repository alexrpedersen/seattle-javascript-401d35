'use strict';

const Notes = require('../lib/notes.js');

// Spies!
// Wouldn't it be great to know if something got called the right way?
// Or the right number of times?
// Or with the right arguments?

// This "spies" on console.log() so that we can watch it being called by our
// code and letting us make assertions on if it got called correctly
jest.spyOn(global.console, 'log');

describe('Note Module', () => {

  it('execute() does nothing with invalid options', () => {
    const notes = new Notes({ command: {} });
    notes.execute();
    expect(console.log).not.toHaveBeenCalled();
  });

  it('notes() can add a note', () => {
    const action = 'add';
    const payload = 'test note';
    const notes = new Notes({ command: { action, payload } });
    notes.execute();
    expect(console.log).toHaveBeenCalledWith(`Adding Note: ${payload}`);
  });

});