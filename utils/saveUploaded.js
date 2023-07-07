const fs = require('fs');

module.exports = {
    saveFile: (fImg, folderUpload) => {
        // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
        let sampleFile = fImg;
        let dir = __dirname + `/../public/pid/${folderUpload}/`;
        let uploadPath = dir + 'main.jpg';
        
        if (!fs.existsSync(dir)){
            fs.mkdirSync(dir, { recursive: true });
        }
        // Use the mv() method to place the file somewhere on your server
        sampleFile.mv(uploadPath, function(err) {
            if (err) console.log(err);
        });
    }
}