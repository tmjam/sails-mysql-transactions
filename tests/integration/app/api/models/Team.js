/**
 * Team.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  schema: true,
  autosubscribe: false,
  autoTK: true,
  attributes: {
    name: {
      type: 'string'
    },
    members: {
      collection: 'User',
      via: 'teams',
      dominant: true
    }
  }
};

