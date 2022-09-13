const request = require('./request.js')
const response = require('./response');

function make_request(url, data) {
    request.send(url, data);
    return response.read('');
}

console.log(make_request('google.com', 'Hello'))