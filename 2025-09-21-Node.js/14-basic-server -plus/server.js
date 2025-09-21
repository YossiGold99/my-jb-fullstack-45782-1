const { createServer } = require('http')
const PORT = process.env.PORT || 3000

const requestHandler = (request, Response) => Response.end('hello world')

createServer().listen(PORT, () => console.log('server started....'))