import swaggerAutogen from 'swagger-autogen';

const outputFile = './swagger.json'
const endpointsFiles = ['./src/ports/http/routers/index.js']

swaggerAutogen(outputFile, endpointsFiles).then(() => {
    require('./index.js')
})