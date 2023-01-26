const express = require('express');
const animalController = require('../controllers/AnimalController');

const router = express.Router();

router.get('/animal', animalController.getAllAnimal);
router.get('/animal/:animalId', animalController.getAnimal);
router.post('/animal/create', animalController.createAnimal);
router.post('/animal/:animalId/update', animalController.updateAnimal);
router.delete('/animal/:animalId/delete', animalController.deleteAnimal);

module.exports = router;
