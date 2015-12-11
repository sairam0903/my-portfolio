'use strict';

var express = require('express');
var app = express();

app
    .use(express.static('./public'))
    .use(express.static('./node_modules'))

    .get('/', function(req,res){
        res.sendFile('main.html',{'root':__dirname + '/public'});
    })

    .listen('8090', function(){
        console.log('Server running at http://localhost:8090 !!')
    });