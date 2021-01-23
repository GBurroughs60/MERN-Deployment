const BeltController = require('../controllers/belt.controller');

module.exports = function(app) {
    app.get('/api/pirates', BeltController.getAllPirates);
    app.get('/api/pirates/:id', BeltController.getOnePirate);
    app.post('/api/pirates/new', BeltController.createPirate);
    app.put('/api/pirates/:id/edit', BeltController.updateOnePirate);
    app.delete('/api/pirates/:id', BeltController.deletePirate);
}