'use strict';

const comment = require("../../comment/controllers/comment");

/**
 * A set of functions called "actions" for `self-comments`
 */

module.exports = {
  exampleAction: async (ctx, next) => {
    // return ctx.request.query
    // return "this is test!"
      const entries = await strapi.db.query('plugin::users-permissions.user').findOne({
        select: ['id'],
        where: { 'id': ctx.request.query.id },
        populate: true,
      });
      return entries.comments
      return {
        "message":`this is comments for user for id`
      }
    try {
      ctx.body = 'ok this is self comments get route api!';
    } catch (err) {
      ctx.body = err;
    }
  }
};
