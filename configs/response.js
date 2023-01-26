const httpStatus = require('http-status');
const { error } = require('./debug');

exports.success = (res, message, payload, code) => {
  return res.status(code || httpStatus.OK).json({ 
    success: true,
    message,
    payload
  });
}

exports.failed = (req, res, message, errorMessage, code) => {
  error(errorMessage || message, req.originalUrl);
  return res.status(code || httpStatus.BAD_REQUEST).json({ 
    success: false,
    message
  })
}
