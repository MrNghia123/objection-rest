var RestApiGenerator = require('./lib/RestApiGenerator');

module.exports = function (objection, adapter = 'express') {
  return new RestApiGenerator(objection, adapter);
};

module.exports.RestApiGenerator = RestApiGenerator;
