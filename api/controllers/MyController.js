// controllers/MyController.js
module.exports = {

  controller_method: function(req, res) {

  var mymodel = db.MyModel({ name: 'Test' });

  mymodel.save(function (err, mymodel) {

    if (err) return console.error(err);

    console.log('mymodel saved.');
    res.json(mymodel);

  });
}
};