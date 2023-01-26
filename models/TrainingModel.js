/**
 * TrainingModel
 */
class TrainingModel {
  /**
   * Constructor
   * @param {*} db
   */
  constructor(db) {
    this.db = db;
    this.COLLECTION_NAME = 'Training';
    this.collection = this.db.collection(this.COLLECTION_NAME);
  }
}

module.exports = TrainingModel;
