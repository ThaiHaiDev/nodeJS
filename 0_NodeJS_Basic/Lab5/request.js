function encrypt(data) {
    return 'Data dc ma hoa';
}

function send(url, data) {
    const dataSend = encrypt(data);
    console.log(`Sending data: ${dataSend}`);
}

module.exports = { send }