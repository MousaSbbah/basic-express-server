'use strict';

const logger = require('../src/middleware/logger.js');

describe('logger middleware', () => {
  let consoleSpy;
  const req = { method: 'get', path: 'test' }
  const res = {};
  const next = jest.fn();

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log');
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it('should \'console.log\' All Requests', () => {
    logger(req, res, next);
    expect(consoleSpy).toHaveBeenCalledWith('Request INFO : ', req.method, req.path)
    expect(next).toHaveBeenCalledWith();
  });
});
