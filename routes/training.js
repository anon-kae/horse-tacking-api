const express = require('express');
const trainingController = require('../controllers/TrainingController');

const router = express.Router();

router.get('/training', trainingController.getAllTraining);
router.get('/training/:trainingId', trainingController.getTraining);
router.post('/training/create', trainingController.createTraining);
router.get('/training/:trainingId/update', trainingController.updateTraining);
router.delete('/training/:trainingId/delete', trainingController.deleteTraining);

module.exports = router;
