const mistion = process.argv[2];
// Giải thích vì sao là process.argv[2] : khi log process.argv thì sẽ hiểu rằng process.argv chưa toàn bộ dòng gọi lệnh process.argv = ['node', 'yourscript.js', ...]
if (mistion === 'learn') {
    console.log('Time to learn...');
} else {
    console.log(`Mistion is ${mistion}`)
}

// How to run : node .\lab1.js learn (với learn là tham số gõ để truyền vào)
