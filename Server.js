const http = require('http')
const { request } = require('https')


const server = http.createServer( (request,response) =>{

    
    if(request.url === '/'){
    response.setHeader('Content-Type' , 'Test/html')
    response.write('<html>')
    response.write('<head> My Page </head')
    response.write('<body><h1>Welcome home</h1></body>')
    response.write('</html>')
    return response.end()

    }else if (request.url === '/about'){
    response.setHeader('Content-Type' , 'Test/html')
    response.write('<html>')
    response.write('<head> My Page </head')
    response.write('<body><h1> Welcome to About Us page</h1></body>')
    response.write('</html>')
    return response.end()
    }else{
    response.setHeader('Content-Type' , 'Test/html')
    response.write('<html>')
    response.write('<head> My Page </head')
    response.write('<body><h1>Welcome to my Node Js project</h1></body>')
    response.write('</html>')
    return response.end()

    }
    


})

server.listen(3000)
