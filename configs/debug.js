const _debug = require('debug')('debugging:debug');
const _error = require('debug')('debugging:error');
const dayjs = require('dayjs');
const winston = require('winston');
const path = require('path');

exports.debug = _debug;

exports.error = (message, url) => {
    if (process.env.NODE_ENV === 'development') {
        const logger = winston.createLogger({
            level: 'error',
            format: winston.format.json(),
            transports: [
                new winston.transports.File({ 
                  filename: path.join(__dirname, '..', 'logs', `${dayjs().format('YYYY-MM-DD HH:mm:ss')}-error.log`),
                  level: 'error' 
                })
            ]
        })
        _error('error with message %o', message)
        return logger.error(`${dayjs().format('HH:mm:ss')} ${url || ''} => ${message}`);
    } else {
        _error('error with message %o', message)
    }
};
