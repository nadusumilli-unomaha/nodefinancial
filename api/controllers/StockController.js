/**
 * StockController
 *
 * @description :: Server-side logic for managing stocks
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  'new': function(req, res, err) {
    Customer.findOne(req.param('owner'), function foundCustomer (err, customer) {
      if (err) return next(err);
      if (!customer) return next();
      res.view({
        customer: customer
      });
    });
  },

  create: function(req, res, next) {
    Stock.create(req.params.all(), function stockCreated(err, stock) {
      if (err) return next(err);
      function process_response(webservice_response, stock, callback){
            var webservice_data ="";
            webservice_response.on('error', function(e){
              //console.log(e.message);
              callback("Error: "+e.message);
            });

            webservice_response.on('data', function(chunck){
              webservice_data += chunck;
            });

            webservice_response.on('end', function(){
              stock_data = JSON.parse(webservice_data);
              stock.purchase_price = stock_data.LastPrice;
              //console.log(stock.symbol + '= $'+stock.current_price);
              callback();
            });
          };


          function get_current_price(stock, callback){
            console.log(stock.symbol);
            options = {
              host: 'dev.markitondemand.com',
              port: 80,
              path: '/MODApis/Api/v2/Quote/JSON?symbol=' + stock.symbol,
              method: 'GET'
            };

            var webservice_request = http.request(options, function(response){
              process_response(response, stock, callback)
            });
            webservice_request.end();

            //console.log(stock.symbol +'='+stock.current_price);
          };

          async.each(customer.stocks, get_current_price, function(err){
            if(err) console.log(err);
            //console.log('done');
      res.redirect('/customer/show/' + stock.owner);
    });
  },

  edit: function(req,res,next){
    Stock.findOne(req.param('id'),function foundStock(err,stock){
      if(err) return next(err);
      if(!stock) return next();

      res.view({
        stock:stock
      });
    });
  },

  show: function (req, res, next) {
      Stock.findOne(req.param('id')).populate('owner').exec(function (err, stock) {
          if (err) return next(err);
          if (!stock) return next();

          res.view({
            stock:stock
          });
      });
  },

  update: function(req,res,next){
    Stock.update(req.param('id'), req.params.all(), function stockUpdated(err,customer){
      if(err){
        return res.redirect('/stock/edit/'+req.param('id'));
      }

      res.redirect('/stock/show/'+req.param('id'));
    });
  },

  destroy: function(req,res,next){
    Stock.destroy(req.param('id')).exec(function(customer){
      res.redirect('/customer/'); 
    });
  } 
  
};
