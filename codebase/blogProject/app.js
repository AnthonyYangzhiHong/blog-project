var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var router = express.Router();
var Bear = require('./models/bear');

var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

router.use(function(req, res, next) {
  console.log('request coming');
  next();
})

router.route('/bears')
  .post(function(req, res) {
    var bear = new Bear();
    bear.name = req.body.name;

    bear.save(function(err) {
      if (err)
        res.send(err);
      res.json({message: 'Bear created!'});
    });
  })
  .get(function(req, res) {
    Bear.find(function(err, bears) {
      if (err) {
        res.send(err);
      }
      res.json(bears);
    });
  });

router.route('/bears/:bear_id')
  .get(function(req, res) {
    Bear.findById(req.params.bear_id, function(err, bear) {
      if (err) {
        console.log("db error");
        res.send(err);
      }
      res.json(bear);
    });
  })
  .put(function(req, res) {
    Bear.findById(req.params.bear_id, function(err, bear) {
      if (err) {
        res.send(err);
      }
      bear.name = req.body.name;
      bear.save(function(err) {
        if (err) {
          res.send(err);
        }
        res.json({message: 'Bear updated!'});
      });
    });
  })
  .delete(function(req, res) {
    Bear.remove({
      _id: req.params.bear_id
    }, function(err, bear) {
      if (err) {
        res.send(err);
      }
      res.json({message: 'Bear deleted'});
    })
  })

app.use('/api', router);


mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/bears');

var port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log('Example app listening on port 3000!')
})