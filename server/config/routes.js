import path from 'path';

module.exports = function(app,express) {

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

  app.route(/.*/)
    .get(function root(req, res) {
      res.sendFile(path.join(__dirname, '/../../client/index.html'));
    });
};
