const jwt = require('jsonwebtoken');
const config = require('../../config.js');

var jwtOptions={
    expiresIn: '1h'
}

function createToken(payload){
    return jwt.sign({data:String(payload)},config.secret,jwtOptions);
}

// function checkToken(token){
//     jwt.verify(token,config.secret,(err,decoded)=>{
//         if(err){
//             console.log("checkToken Error: "+err);
//             return null;
//         }else{
//             return decoded;
//         }
//     });
// }

function checkRequestToken(req,res,next){
    let token = req.headers['Authorization'];
    if (token.startsWith('Bearer ')) {
        // Remove Bearer from string
        token = token.slice(7, token.length);
    }
    if(token){
        jwt.verify(token,config.secret,function(err,decoded){
            if (err) {
                return res.status(401).send();
              } else {
                req.decoded = decoded;
                next();
              }
        });
    }else {
        return res.status(401).send();
    }
    
}


module.exports={
    createToken:createToken,
    checkRequestToken:checkRequestToken
}