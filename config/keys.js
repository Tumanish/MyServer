const protectKeys = require('./protectKeys');

module.exports = {
	mongoURI: protectKeys.mongoURI ,
	jwt: protectKeys.jwt,

}

// standart local url for mongoDB
// module.exports = {
	// mongoURI: 'mongodb://localhost:27017/ColectionName',
	// jwt: "test-key-words",
// }