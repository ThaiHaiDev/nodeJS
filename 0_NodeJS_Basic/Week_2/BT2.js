// Viết chương trình đọc nội dung file txt (tham số từ command line) và hiện nội dung file lên console

var fs = require("fs"); 

const nameFile = process.argv[2];
const textFile = process.argv[3];
fs.writeFile(nameFile, textFile,  function(err) {
    if (err) {
        return console.error(err);
    }
    console.log("Ghi du lieu vao file thanh cong!");
    console.log("Doc du lieu vua duoc ghi");
    fs.readFile(nameFile, function (err, data) {
       if (err) {
          return console.error(err);
       }
       console.log("Phuong thuc doc file khong dong bo: " + data.toString());
    });
 });

 // How to run: node BT2.js TenFile TextFile : (với TenFile là tên file cần đọc nội dung, nếu file chưa có thì sẽ tự tạo ra file có tên đó
//  TextFile là nội dung của file, ghi nội dung gì thì file sẽ lưu lại nội dung đó và console ra)