const Firestore = require('../configs/Firestore');
const AnimalModel = require('./AnimalModel')
const TrainingModel = require('./TrainingModel')
const TypeModel = require('./TypeModel')

module.exports = {
  AnimalModel: new AnimalModel(Firestore),
  TrainingModel: new TrainingModel(Firestore),
  TypeModel: new TypeModel(Firestore),
};