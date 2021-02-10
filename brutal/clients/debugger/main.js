var ws = require('ws');
var url = require('url');
var fs = require('fs');
var proxyAgent = require('https-proxy-agent');
var proxyPos = 0;
var botCount = 0;

var ws = require('ws');
const { error } = require('console');
var botCount = 0;

//this is the main function
function encodeName(name){
    rname = [3, 78, 0, 105, 0, 99, 0, 107, 0, 110, 0, 97, 0, 109, 0, 101, 0, 39, 0, 115, 0, 32, 0, 98, 0, 111, 0, 116, 0, 0, 0];
    return rname;
}

function index() {
    var originProxy = {
        origin: 'http://brutal.io',
    };
    //makes the ws
    var bot = new ws('ws://158.69.123.15:8091', originProxy)
    bot.onmessage = function (msg) {console.log(new Uint8Array(msg.data) + '\n\n')}

    bot.onopen = function () {
        //connects the bot
        bot.send(new Uint8Array([1, 105, 0, 97, 0]))
        bot.send(new Uint8Array([0]))
        bot.send(new Uint8Array(encodeName("yes")))
        bot.send(new Uint8Array([8, 1]))
        bot.send(new Uint8Array([8, 0]))
        
    }
    bot.on('error', () => { })
}
index()

