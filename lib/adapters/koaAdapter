'use strict';

var Promise = require('bluebird');

module.exports = function koaAdapter(router, method, route, callback) {
  // Koa router has a routing method for each HTTP verb. Call the correct
  // routing method and pass the route as a parameter.
  router[method.toLowerCase()](route, function (ctx, next) {
    Promise.try(function () {
      // objection-rest only needs the `params`, `query` and `body` attributes of
      // the koa request.
      return callback({params: ctx.request.params, query: ctx.request.query, body: ctx.request.body});
    }).then(function (result) {
      ctx.body = result
    }).catch(next);
  });
};
