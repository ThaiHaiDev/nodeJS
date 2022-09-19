// Nguyễn Thái Hải - 19110356 - Nhóm 22

const http = require('http');
const PORT = 5000;

const server = http.createServer();

const mygroup = [
    {id:19110356,name:'Nguyen Thai Hai'},
    {id:19110462, name: 'Hoang Minh Thang'}
];

server.on('request', (req, res) => {
    // req.url = /friend/0 => split('/') = ['', friend, '0']
    const items = req.url.split('/')
    switch(items[1]) {
        case '': 
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(mygroup))
            break;
        case '22':
            if (req.method == 'POST') {
                req.on('data', (data) => {
                    const newFriend = data.toString();
                    if (mygroup.filter(e => e.id === JSON.parse(newFriend).id).length > 0) {
                        console.log('Not valid')
                    } else {
                        mygroup.push(JSON.parse(newFriend));
                    }
                })
                req.pipe(res);
            } else {
                const student = mygroup.filter(value => value.id === parseInt(items[2]))
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                if (items.length < 3) {
                    res.end(JSON.stringify(mygroup))
                } else {
                    res.end(JSON.stringify(student[0]))
                }
            }
            break;
        case 'message':
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            if (items.length < 3) {
                res.end(JSON.stringify(mygroup))
            } else {
                const student = mygroup.filter(value => value.id === parseInt(items[2]))
                if(student.length !== 0) {
                    res.write(`<html><body><ul><li>${student[0].name}</li></ul></body></html>`)
                } else {
                    res.write(`<html><body>Not valid</body></html>`)
                }
            }
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

// fetch('http://localhost:5000/friend', {method: 'POST', body: JSON.stringify({id: 3, name: 'Test'})})