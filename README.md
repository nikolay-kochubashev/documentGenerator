# documentGenerator
Document Generator within CarboneJS and minio

# Document generator solution based on carbonejs, minio, nodejs
This solution is an application that uses CarboneJS to generate documents, Minio as a data warehouse and NodeJS as a server environment.

## Installation
To install, you need to clone the repository and install all dependencies using npm or yarn.
```
bash
git clone https://github.com/nikolay-kochubashev/documentGenerator
cd documentGenerator
npm install
```
## Launch

You can start the application using the npm start or yarn start command.
```
bash
npm start
```
## Deploying Minio

Minio is a high-performance distributed object storage. You can use Docker to install and run it. Here is an example of a command to run Minio in Docker:

```
bash
docker run -p 9000:9000 --name minio1 \
  -e "MINIO_ACCESS_KEY=your-access-key" \
  -e "MINIO_SECRET_KEY=your-secret-key" \
  minio/minio server /data
```

After the launch, Minio is available at http://localhost:9090 .

To work with Minio from the application, you need to install and configure the Minio client. Example of client configuration:
```
javascript
const Minio = require('minio')

const minioClient = new Minio.Client({
    endPoint: 'localhost',
    port: 9000,
    useSSL: false,
    accessKey: 'your-access-key',
    secretKey: 'your-secret-key'
});
```
## Usage

After installing and launching the application, you can start using it to generate documents. An example of usage is provided in the application code.

### Add acess keys
Go to http://localhost:9090/access-keys and generate keys. Add this keys to your Nodejs code in App.js as shown above.

### Add new bucket
Go to http://localhost:9090/ and add new Bucket, "general-templates" for example
![image](https://github.com/nikolay-kochubashev/documentGenerator/assets/54528038/d4371b46-780c-460d-9a6e-e094fe3dc57e)

### Upload template
Upload new document from repository "complicated.docx"
![image](https://github.com/nikolay-kochubashev/documentGenerator/assets/54528038/25866afb-4435-4136-9374-bb850e29fcba)

### Post Request throught Postman
Type "localhost:3005/api/render/general-templates/complicated.docx"
![image](https://github.com/nikolay-kochubashev/documentGenerator/assets/54528038/e901e148-4a7a-467d-842c-6065bb0b7dac)

Save Response as a file and you can see the result
![image](https://github.com/nikolay-kochubashev/documentGenerator/assets/54528038/86ad1d28-79b8-41f3-879b-08ac5365d8e5)

You got it!

## About Me
My name is Nikolay Kochubashev, I am a solution and application architect in a large company in Kazakhstan. I specialize in low-code solutions and platform engineering.
[https://solution-architect.kz](https://solution-architect.kz) 
[https://low-code.kz](https://low-code.kz)
I am blogging in the telegram channel in Russian [https://t.me/architectkz](https://t.me/architectkz)
nikolay.kochubashev@gmail.com

