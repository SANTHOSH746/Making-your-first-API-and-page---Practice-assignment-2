const express=require('express');
const app=express();
const port=8080

app.get('/status-info',(req,res)=>{
   
    const statusCode = {
        200 : 'Request was successful',
        201 : 'A resource has been successfully created',
        204 : 'Request processed successfully, no content returned',
        400 : 'The request is invalid due to client-side errors',
        401 : 'Authentication is required to access the resource',
        403 : 'Server refuses to authorize the request',
        404 : 'The resource does not exist',
        405 : 'HTTP method not supported for this resource',
        429 : 'User has exceeded rate limits'

    }
    const code = parseInt(req.query.codee);

    if(statusCode[code]){
        res.send({
            "status": code,
            "message": statusCode[code]
        })
    }else{
        res.send({
            "status": 404,
            "message": "Code Not Found"
        })
    }
})

app.listen(port,()=>{
    console.log(`server is running in ${port}`)
})