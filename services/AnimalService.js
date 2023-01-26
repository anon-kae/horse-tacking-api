const { Timestamp } = require('@google-cloud/firestore');

/**
 * AnimalService
 */
class AnimalService {
  /**
   * Constructor
   * @param {object} repositories
   */
  constructor({ AnimalModel }) {
    this.AnimalModel = AnimalModel;
  }

  /**
   * Find all animal
   * @returns {Promise<*>}
   */
  async findAll() {
    const snapshots = await this.AnimalModel.collection.get();
    return snapshots.docs.map((element) => ({ 
      id: element.id,
      ...element.data(),
      createdAt: element.data()?.createdAt?.toDate(),
      updatedAt: element.data()?.updatedAt?.toDate(),
    }));
  }

  /**
   * Find account by animalId
   * @param {string} animalId
   * @returns {Promise<*>}
   */
  async findById(animalId) {
    const animal = await this.AnimalModel.collection.doc(animalId).get();
    return { 
      ...animal.data(),
      id: animal.id,
      createdAt: animal.data()?.createdAt?.toDate(),
      updatedAt: animal.data()?.updatedAt?.toDate(),
    };
  }

  /**
   * Create a animal
   * @param {object} animal
   * @returns {Promise<*>}
   */
  async create(animal) {
    const now = Timestamp.now();
    await this.AnimalModel.collection.add({ ...animal, createdAt: now });
    return true;
  }

  /**
   * Update animal by animalId
   * @param {string} animalId
   * @param {object} animal
   * @returns {Promise<*>}
   */
  async updateById(animalId, animal) {
    const now = Timestamp.now();
    await this.AnimalModel.collection.doc(animalId).update({ ...animal, updatedAt: now });
    return true;
  }

  /**
   * Delete animal by animalId
   * @param {string} animalId
   * @returns {Promise<*>}
   */
  async deleteById(animalId) {
    const ref = this.AnimalModel.collection.doc(animalId);
    await ref.delete();
    return true;
  }
}

module.exports = AnimalService;
