const winston = require('winston');
const appRoot = require('app-root-path');

const level = process.env.LOG_LEVEL || 'info';

const logger =  winston.createLogger({
    transports: [
        new winston.transports.Console({
            level: level,
            timestamp: () => (new Date()).toISOString()
        }),
        new winston.transports.File({
            level: level,
            filename: `${appRoot}/logs/app.log`,
            andleExceptions: true,
            json: true,
            maxsize: 5242880, // 5MB
            maxFiles: 5,
            colorize: false,
        })
    ]
})

logger.stream = {
    write: (message, encoding) => {
        logger.info(message)
    }
}

module.exports = logger