module.exports = (req, res, next) => {
  console.log('__REQ__', req.method, req.path);
  next(); // the method to move to the next middleware in the middleware chain
}