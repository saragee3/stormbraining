module.exports = function(app) {

  app.route('.*/')
    .get(function root(req, res) {
      res.sendFile(__dirname + '/../client/index.html');
    });

  app.route('/api/boards')
    .get(function(req, res) {

    })
    .post(function(req, res) {

    });

  app.route('/api/boards/:board_id')
    .get(function(req, res) {

    })
    .put(function(req, res) {

    })
    .delete(function(req, res) {

    })

  app.route('/api/boards/:board_id/ideas')
    .post(function(req, res) {

    })

  app.route('/api/boards/:board_id/ideas/:idea_id')
    .get(function(req, res) {

    })
    .put(function(req, res) {

    })
    .delete(function(req, res) {

    })


};
