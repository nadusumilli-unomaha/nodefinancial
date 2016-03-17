/**
 * Investment.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    
    investor:{
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
      type: 'float'
    },

    acquired_date:{
      type: 'string'
    },

    recent_value:{
      type: 'float'
    },

    recent_date:{
      type: 'string'
    }
  }
};

