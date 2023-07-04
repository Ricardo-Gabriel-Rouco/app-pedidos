const server = require('./src/app')
const { conn } = require('./src/db')

conn.sync({ force: false, alter: true }).then(() => {
  server.listen(5000, () => {
    console.log('%s listening at 5000'); // eslint-disable-line no-console
  });
});
