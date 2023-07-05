require('dotenv').config()
const server = require('./src/app')
const { conn } = require('./src/db')
const {PORT} = process.env

conn.sync({ force: false, alter: true }).then(() => {
  server.listen(PORT, () => {
    console.log(`%s listening at ${PORT}`); // eslint-disable-line no-console
  });
});
