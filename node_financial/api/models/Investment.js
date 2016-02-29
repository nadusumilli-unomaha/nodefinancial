/**
 * Investment.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
     Investor:{
      model: 'customer',
      required: true
    },
    category: {
      type: 'string'
    },
    description: {
      type: 'string'
    },
    acquired_value:{
      type: 'string'
    },
    acquired_date:{
      type: 'string'
    },
    recent_date:{
      type: 'string'
    }
  }
};

