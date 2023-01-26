const Firestore = require('@google-cloud/firestore');

module.exports = new Firestore({ 
  projectId: process.env.FIREBASE_PROJECT,
  keyFilename: process.env.FIREBASE_CRENDENTIAL
});
