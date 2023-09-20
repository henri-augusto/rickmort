const app = require('./app');

const server = app.listen(8000, () => {
  console.log('Server is running on 8000 port');
});
