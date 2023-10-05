const express = require("express");
const bodyParser = require('body-parser');
const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

var Minio = require('minio')
var minioClient = new Minio.Client({
  endPoint: 'localhost',
  port: 9000,
  useSSL: false,
  accessKey: 'p2LqqCTdzci9oFauiwzh',
  secretKey: 'iXWbkyynt1TDf3hJBkpW2CHmUVMraaWHLIKV6Has',
})

const carbone = require('carbone');
const fs = require('fs');
app.use(express.static(__dirname + "/public"));
  
app.post("/api/render/:bucketName/:objectName", async function(req, res){

    const bucketName = req.params.bucketName; 
    const objectName = req.params.objectName; 
    const data = req.body; // Данные из тела запроса
    console.log("req " + req.body);
    // Скачивание файла из Minio
    minioClient.getObject(bucketName, objectName, function(err, dataStream) {
        if (err) {
        return res.status(500).send(err);
        }
        var fileData = [];
        dataStream.on('data', function(chunk) {
        fileData.push(chunk);
        });
        dataStream.on('end', function() {
        console.log("End. File downloaded successfully.");
        var fileBuffer = Buffer.concat(fileData);

        // Запись файла на диск
        const templatePath = objectName;
        fs.writeFileSync(templatePath, fileBuffer);

        // Рендеринг файла с использованием CarboneJS
        carbone.render(templatePath, data, {}, function(err, result) {
            if (err) {
            return res.status(500).send(err);
            }
            fs.writeFileSync('output.docx', result);
            console.log("Rendering complete. Output file saved.");

            // Отправка файла как ответа
            res.sendFile(__dirname + '/output.docx');
        });
        });
        dataStream.on('error', function(err) {
        return res.status(500).send(err);
        });
    });    

});

 
app.listen(3005, function(){
    console.log("Сервер ожидает подключения...");
});