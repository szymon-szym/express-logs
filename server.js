const express = require('express');
const morgan = require('morgan');
const logger = require('./logger')

const PORT = 3000;

const app = express();

app.use(morgan('combined', {
    skip: function(req, res) {
        return res.statusCode < 400
    }, stream: logger.stream
}));

app.use(morgan('combined', {
    skip: function(req, res) {
        return res.statusCode >= 400 
    }, stream: logger.stream
}));

app.get('/', function(req, res){
    logger.debug('debug statement')
    logger.info('info statement')
    res.send('Hi there!')
});

app.listen(PORT, function(){
    console.log(`app is listening on port ${PORT}`)
});