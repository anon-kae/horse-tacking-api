const { success, failed } = require('../configs/response');
const models = require('../models')
const { TrainingService } = require('../services');
const { Timestamp } = require('@google-cloud/firestore');

exports.getAllTraining = async (req, res, next) => {
  try {
    const trainingService = new TrainingService(models);
    const result = await trainingService.findAll();
    
    success(res, 'Successfully find all training', { result })
  } catch (error) {
    failed(req, res, 'Oops! something went wrong.', error)
  }
};

exports.getTraining = async (req, res, next) => {
  try {
    const { trainingId } = req.params;
    const trainingService = new TrainingService(models);
    const result = await trainingService.findById(trainingId);

    success(res, 'Successfully find training', { result })
  } catch (error) {
    failed(req, res, 'Oops! something went wrong.', error)
  }
};

exports.createTraining = async (req, res, next) => {
  try {
    const { title, time, distance } = req.body;
    const trainingService = new TrainingService(models);
    const result = await trainingService.create({ title, time, distance, status: 'ACTIVE' });

    success(res, 'Successfully created training', { message: result })
  } catch (error) {
    failed(req, res, 'Oops! something went wrong.', error)
  }
};

exports.updateTraining = async (req, res, next) => {
  try {
    const trainingService = new TrainingService(models);
    const { trainingId } = req.params;
    const { speed, bestSpeed } = req.query;

    const { labs } = await trainingService.findById(trainingId)
    const training = { labs }
    training.labs.push({ speed, bestSpeed, date: Timestamp.now() })
    await trainingService.updateById(trainingId, training);

    success(res, 'Successfully updated training')
  } catch (error) {
    failed(req, res, 'Oops! something went wrong.', error)
  }
};

exports.deleteTraining = async (req, res, next) => {
  try {
    success(res, 'Successfully', { message: 'Trainings' })
  } catch (error) {
    failed(req, res, 'Oops! something went wrong.', error)
  }
};