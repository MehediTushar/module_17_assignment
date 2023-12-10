const app = require('./app');
const port = 5050;

app.listen(port, function (error) {
  if (error) {
    console.error('Unable to start the server:', error);
  } else {
    console.log('Server is running on port', port);
  }
});
