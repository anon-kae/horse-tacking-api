const { success, failed } = require('../configs/response');
const { AnimalService } = require('../services');

exports.getAllAnimal = async (req, res, next) => {
  try {
    success(res, 'Successfully', { message: 'Animals' })
  } catch (error) {
    failed(req, res, 'Oops! something went wrong.')
  }
};

exports.getAnimal = async (req, res, next) => {
  try {
    success(res, 'Successfully', { message: 'Animals' })
  } catch (error) {
    failed(req, res, 'Oops! something went wrong.')
  }
};

exports.createAnimal = async (req, res, next) => {
  try {
    success(res, 'Successfully', { message: 'Animals' })
  } catch (error) {
    failed(req, res, 'Oops! something went wrong.')
  }
};

exports.updateAnimal = async (req, res, next) => {
  try {
    success(res, 'Successfully', { message: 'Animals' })
  } catch (error) {
    failed(req, res, 'Oops! something went wrong.')
  }
};

exports.deleteAnimal = async (req, res, next) => {
  try {
    success(res, 'Successfully', { message: 'Animals' })
  } catch (error) {
    failed(req, res, 'Oops! something went wrong.')
  }
};

