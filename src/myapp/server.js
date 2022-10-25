var express = require('express');
var app = express();
var port = 3000;
app.get('/', function (req, res) {
    res.send('Hello word');
});
// app.listen(3000, console.log("server started on port 3000"));
// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
//   })
app.post('/', function (req, res) {
    res.send('I am a POST request');
});
app.listen(port, function () {
    console.log("Example app listening on port ".concat(port));
});
