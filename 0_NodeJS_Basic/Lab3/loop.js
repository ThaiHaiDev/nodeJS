// Thứ tự các event loop : Timer -> I/O callback -> setImmediate -> Close callback: các event này đc đưa vào loop và lặp đi lặp lại nhiều lần, hổ trợ multipal threar

const EventEmitter = require('events');
const celebrate = new EventEmitter();

celebrate.on('race win', () => {
    console.log('You win');
});

celebrate.on('race lost', () => {
    console.log('You lose');
});

process.on('exit', (code) => {
    console.log(`Exit code: ${code}`)
});

celebrate.emit('race win');  // Thực thi