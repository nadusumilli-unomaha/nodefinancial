/**
 * InvestmentController
 *
 * @description :: Server-side logic for managing Investments
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	'new': function(req, res, err) {
    Customer.findOne(req.param('investor'), function foundCustomer (err, customer) {
      if (err) return next(err);
      if (!customer) return next();
      res.view({
        customer: customer
      });
    });
  },

  create: function(req, res, next) {
    Investment.create(req.params.all(), function investmentCreated(err, investment) {
      if (err) return next(err);

      res.redirect('/customer/show/' + investment.investor);
    });
  },

  edit: function(req,res,next){
    Investment.findOne(req.param('id'),function foundInvestment(err,investment){
      if(err) return next(err);
      if(!investment) return next();

      res.view({
        investment:investment
      });
    });
  },

  show: function (req, res, next) {
      Investment.findOne(req.param('id')).populateAll().exec(function (err, investment) {
          if (err) return next(err);
          if (!investment) return next();

          res.view({
            investment:investment
          });
      });
  },

  update: function(req,res,next){
    Investment.update(req.param('id'), req.params.all(), function investmentUpdated(err,customer){
      if(err){
        return res.redirect('/investment/edit/'+req.param('id'));
      }

      res.redirect('/investment/show/'+req.param('id'));
    });
  },

  destroy: function(req,res,next){
    Investment.destroy(req.param('id')).exec(function(){
      res.redirect('/customer/'); 
    });
  } 
};

