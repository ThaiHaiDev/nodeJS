// Viết chương trình tạo object là Sinhvien có event là hoc, khi event được trigger, tùy theo tham số truyền vào sinh viên sẽ học chương trình tương ứng

const EventEmitter = require('events');
const celebrate = new EventEmitter();

const SinhVien = {
    hoc: ''
}

celebrate.on('learn', (value) => {
    SinhVien.hoc = value
    console.log(`Sinh viên đang học môn: ${SinhVien.hoc}`);
});


celebrate.emit('learn', 'Toán');  // Thực thi