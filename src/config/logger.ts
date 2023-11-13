import winston from 'winston';

const logger = winston.createLogger({
    level: 'info',
    defaultMeta: {
        serviceName: 'Auth Service',
    },
    transports: [
        new winston.transports.File({
            dirname: 'logs',
            filename: 'error.log',
            level: 'error',
        }),
        new winston.transports.File({
            dirname: 'logs',
            filename: 'app.log',
            level: 'info',
        }),
        new winston.transports.Console({
            level: 'info',
            format: winston.format.combine(
                winston.format.timestamp(),
                winston.format.json(),
            ),
        }),
    ],
});
export default logger;
