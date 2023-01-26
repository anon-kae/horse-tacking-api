/**
 * TypeModel
 */
class TypeModel {
  /**
   * Constructor
   * @param {*} db
   */
  constructor(db) {
    this.db = db;
    this.COLLECTION_NAME = 'Types';
    this.collection = this.db.collection(this.COLLECTION_NAME);
  }
}

module.exports = TypeModel;
