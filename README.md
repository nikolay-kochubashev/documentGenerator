# documentGenerator
Document Generator within CarboneJS and minio

# Document generator solution based on carbonejs, minio, nodejs
This solution is an application that uses CarboneJS to generate documents, Minio as a data warehouse and NodeJS as a server environment.

## Installation
To install, you need to clone the repository and install all dependencies using npm or yarn.

bash
git clone https://github.com/your-repo-url](https://github.com/nikolay-kochubashev/documentGenerator)
cd documentGenerator
npm install

## Launch

You can start the application using the npm start or yarn start command.

bash
npm start

## Deploying Minio

Minio is a high-performance distributed object storage. You can use Docker to install and run it. Here is an example of a command to run Minio in Docker:

```bash
docker run -p 9000:9000 --name minio1 \
  -e "MINIO_ACCESS_KEY=your-access-key" \
  -e "MINIO_SECRET_KEY=your-secret-key" \
  minio/minio server /data```

After the launch, Minio is available at http://localhost:9090 .

To work with Minio from the application, you need to install and configure the Minio client. Example of client configuration:

javascript
const Minio = require('minio')

const minioClient = new Minio.Client({
    endPoint: 'localhost',
    port: 9000,
    useSSL: false,
    accessKey: 'your-access-key',
    secretKey: 'your-secret-key'
});

## Usage

After installing and launching the application, you can start using it to generate documents. An example of usage is provided in the application code.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

If you have any problems or questions, please create an "issue" in this repository.

## Contribution

Contributions to this project are welcome. If you want to contribute, please make a "fork" of this repository and send a "pull request".
