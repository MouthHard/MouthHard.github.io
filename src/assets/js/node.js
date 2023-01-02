//一次性将所有Mp3文件都转成了base64字符串数组备用：
var fs = require('fs');
var file = 'notes.json';

// function to encode file data to base64 encoded string
function base64_encode(file) {
    // read binary data
    var bitmap = fs.readFileSync(file);
    // convert binary data to base64 encoded string
    return new Buffer(bitmap).toString('base64');
}
// fs.readdir('../assets/piano', function(error, files) {
//     var content = "";
//     files.forEach((f, index) => {
//         if(/^\d/.test(f)) {
//             var data = base64_encode(f);
//             content += `"${data}",\n`;
//         }
//     });
//     fs.writeFileSync(file, content);
// })
