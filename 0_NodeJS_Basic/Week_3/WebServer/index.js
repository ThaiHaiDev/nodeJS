const http = require('http');
const PORT = 5000;

// const server = http.createServer((req, res) => {
//     res.writeHead(200, {
//         'Content-Type': 'application/json'
//     });
//     res.end(JSON.stringify({id: 1, name:'Hai'}));
// })

const server = http.createServer();

const friends = [
    {id:0,name:'Hai'},
    {id:1, name: 'Thang'}
];

server.on('request', (req, res) => {
    // req.url = /friend/0 => split('/') = ['', friend, '0']
    const items = req.url.split('/')
    switch(items[1]) {
        case 'friend':
            if (req.method == 'POST') {
                req.on('data', (data) => {
                    const newFriend = data.toString();
                    friends.push(JSON.parse(newFriend));
                })
                req.pipe(res);
            } else {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                if (items.length < 3) {
                    res.end(JSON.stringify(friends))
                } else {
                    res.end(JSON.stringify(friends[parseInt(items[2])]))
                }
            }
            break;
        case 'message':
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.write('<html><body><ul><li>Nguyen Thai Hai</li></ul></body></html>')
            res.end();
            break;
        default:
            res.statusCode = 404;
            res.end(); 
    }
});

server.listen(PORT, () => {
    console.log(`Server is listening at ${PORT}`);
})