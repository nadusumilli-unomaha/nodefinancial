/**
 * Stock.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    symbol: {
      type: 'string',
      required: true
    },

    number_of_shares: {
      type: 'float',
      required: true
    },

    owner: {
      model: 'customer',
      required: true
    },

    purchase_price: {
      type: 'string'
    },

    date_purchased:{
      type: 'string'
    },
    
    name:{
      type: 'string'
    },

    current_price:{
      type: 'string'
    },

    current_stock_portfolio:{
      type:'string'
    },

    initial_stock_portfolio:{
      type:'string'
    },

    total_portfolio:{
      type:'string'
    }
  }
};

