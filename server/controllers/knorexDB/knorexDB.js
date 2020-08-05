//Require the express package and use express.Router()
const express = require('express');
const router = express.Router();
const knorexDBJson = require('./knorexDBJson');

//GET HTTP method to /bucketlist
router.get('/', (req, res) => {
  knorexDBJson.find().exec(function (err, data) {
    if (err) throw err;
    res.send(data);
  });
});

router.post('/', (req, res) => {
  knorexDBJson.findByIdAndUpdate({
    '_id': req.body.id
  }, req.body.data, (err, data) => {
    if (err) {
      res.send({
        status: 'Failed',
        body: 'Processing Error'
      })
    }
    if (data) {
      res.send({
        status: 'Ok',
        body: data
      })
    }
  })
})

module.exports = router;