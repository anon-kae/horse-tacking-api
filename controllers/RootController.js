const { success, failed } = require('../configs/response');

exports.getApiIdentity = async (req, res, next) => {
  try {
    success(res, 'Successfully', { message: 'Horse Tacking API' })
  } catch (error) {
    failed(req, res, 'Oops! something went wrong.')
  }
};
