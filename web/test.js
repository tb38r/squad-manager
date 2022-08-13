// var axios = require('axios');
// var data = JSON.stringify({
//   query: `{authors{
//   name
//   books {
//     id
//     name
//   }
// }}`,
//   variables: {}
// });

// var config = {
//   method: 'post',
//   url: 'http://localhost:8080/graphql?',
//   headers: { 
//     'Content-Type': 'application/json'
//   },
//   data : data
// };

// axios(config)
// .then(function (response) {
//   console.log(JSON.stringify(response.data));
// })
// .catch(function (error) {
//   console.log(error);
// });

var http = require('follow-redirects').http;
var fs = require('fs');

var options = {
  'method': 'POST',
  'hostname': 'localhost',
  'port': 8080,
  'path': '/graphql?=null',
  'headers': {
    'Content-Type': 'application/json'
  },
  'maxRedirects': 20
};

var req = http.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function (chunk) {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });

  res.on("error", function (error) {
    console.error(error);
  });
});

var postData = JSON.stringify({
  query: `{authors{
  name
  books {
    id
    name
  }
}}`,
  variables: {}
});

req.write(postData);

req.end();