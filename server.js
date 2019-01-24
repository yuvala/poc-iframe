const express = require ('express');
const app = express();
const port = process.env.PORT || 3535;
app.use('/', express.static('angular-app/dist'));
app.use('/legacy', express.static('angularjs-app/src'));

app.listen(port, function () {
  console.log(' this  app listening on port ' + port)
});