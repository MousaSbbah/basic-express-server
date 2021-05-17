module.exports = (req, res, next) => {
  console.log('Request INFO : ', req.method, req.path);
  next();
};
