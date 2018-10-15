'use strict';

var Promise = require('bluebird');

module.exports = function koaAdapter(router, method, route, callback) {
  // Koa router has a routing method for each HTTP verb. Call the correct
  // routing method and pass the route as a parameter.
  router[method.toLowerCase()](route, async function (ctx, next) {
    ctx.body = await callback({params: ctx.request.params, query: ctx.request.query, body: ctx.request.body})
  });
};
