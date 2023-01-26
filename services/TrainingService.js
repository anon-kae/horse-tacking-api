const { Timestamp } = require('@google-cloud/firestore');

/**
 * TrainingService
 */
class TrainingService {
  /**
   * Constructor
   * @param {object} repositories
   */
  constructor({ TrainingModel }) {
    this.TrainingModel = TrainingModel;
  }

  /**
   * Find all training
   * @returns {Promise<*>}
   */
  async findAll() {
    const snapshots = await this.TrainingModel.collection.get();
    return snapshots.docs.map((element) => ({ 
      id: element.id,
      ...element.data(),
      createdAt: element.data()?.createdAt?.toDate(),
      updatedAt: element.data()?.updatedAt?.toDate(),
    }));
  }

  /**
   * Find account by trainingId
   * @param {string} trainingId
   * @returns {Promise<*>}
   */
  async findById(trainingId) {
    const training = await this.TrainingModel.collection.doc(trainingId).get();
    return { 
      ...training.data(),
      id: training.id,
      createdAt: training.data()?.createdAt?.toDate(),
      updatedAt: training.data()?.updatedAt?.toDate(),
    };
  }

  /**
   * Create a training
   * @param {object} training
   * @returns {Promise<*>}
   */
  async create(training) {
    const now = Timestamp.now();
    await this.TrainingModel.collection.add({ ...training, createdAt: now });
    return true;
  }

  /**
   * Update training by trainingId
   * @param {string} trainingId
   * @param {object} training
   * @returns {Promise<*>}
   */
  async updateById(trainingId, training) {
    const now = Timestamp.now();
    await this.TrainingModel.collection.doc(trainingId).update({ ...training, updatedAt: now });
    return true;
  }

  /**
   * Delete training by trainingId
   * @param {string} trainingId
   * @returns {Promise<*>}
   */
  async deleteById(trainingId) {
    const ref = this.TrainingModel.collection.doc(trainingId);
    await ref.delete();
    return true;
  }
}

module.exports = TrainingService;
