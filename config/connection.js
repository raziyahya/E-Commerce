const mongoClient = require('mongodb').MongoClient;

const state = {
    db: null
};

module.exports.connect = function (done) {
    const url = 'mongodb://127.0.0.1:27017/'
    const dbname = 'shopping';

    mongoClient.connect(url, (err, client) => {
        if (err) return done(err);
        
        state.db = client.db(dbname); // Use client.db() to get the database
        done();
    });
};

module.exports.get = function () {
    return state.db;
};
