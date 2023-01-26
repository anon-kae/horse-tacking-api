/**
 * AnimalModel
 */
class AnimalModel {
  /**
   * Constructor
   * @param {*} db
   */
  constructor(db) {
    this.db = db;
    this.COLLECTION_NAME = 'Animals';
    this.collection = this.db.collection(this.COLLECTION_NAME);
  }
}

module.exports = AnimalModel;
