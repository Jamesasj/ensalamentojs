import swaggerAutogen from 'swagger-autogen';


const doc = {
    info: {
      title: 'My API',
      description: 'Description'
    },
    host: 'localhost:3000'
  };

const outputFile = './swagger.json'
const endpointsFiles = ['./src/ports/http/routers/index.js']

swaggerAutogen()(outputFile, endpointsFiles, doc).then(async () => {
    await import('./src/ports/http/bin/www.js'); // Your project's root file
  });