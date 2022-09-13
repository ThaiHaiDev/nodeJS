// Viết chương trình sử dụng Nodejs chạy trên command line thực hiện các phép toán Cộng, Trừ, Nhân, Chia. Các tham số được nhập từ command line: +,-,*,/ tương ứng với 4 phép toán, sau đó là nhập 2 số a và b. Chương trình hiện kết quả trên console

const calculation = process.argv[2];

const a = process.argv[3];

const b = process.argv[4];

if (calculation === '+') {
    console.log('Result: ', parseInt(a) + parseInt(b))
} else if (calculation === '-') {
    console.log('Result: ', parseInt(a) - parseInt(b))
} else if (calculation === '*') {
    console.log('Result: ', parseInt(a) * parseInt(b))
} else if (calculation === '/') {
    console.log('Result: ', parseInt(a) / parseInt(b))
}

// How to run
// CMD: node BT1.js + 1 2
// Result:  3
// CMD: node BT1.js * 1 2
// Result:  2
// CMD: node BT1.js / 1 2
// Result:  0.5
// CMD: node BT1.js - 1 2
// Result:  -1