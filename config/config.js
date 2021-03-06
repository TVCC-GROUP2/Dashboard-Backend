module.exports = {
    env: process.env.NODE_ENV,
    port: process.env.PORT,
    jwtSecret: process.env.JWT_SECRET,
    jwtExpirationInterval: process.env.JWT_EXPIRATION_MINUTES,
    mongo: {
      uri: process.env.NODE_ENV === 'test'
        ? process.env.SQL_URI_TESTS
        : process.env.SQL_URI,
    },
  };