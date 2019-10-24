var linebot = require('linebot');
var express = require('express');
var path = require('path');

var bot = linebot({
    channelId: '1653367527',
    channelSecret: '49edbcdded058d4e451d86fba3c6e71d',
    channelAccessToken: 'l/hb3M1KL4QZk58PYcxHiy1DGj9UMckTSv5ZaZWeeXuZc4x3Ce3HtMz1ZwGZO3DCVrjsNKFi/G6vb39NrZDxQzN2EV3voX96ED7mpUXi69Mpk/Yr+Ug/Mn1OQWJXrHcBhuyWrRrkSJwi4nxn66uGAQdB04t89/1O/w1cDnyilFU='
});

var message = {
    "你好":"我不好",
    "你是誰":"我是ㄐ器人"
};

bot.on('message', function (event) {
    var respone;
    if(message[event.message.text]){
        respone = message[event.message.text];
    }else{
        respone = '我不懂你說的 ['+event.message.text+']';
    }
	console.log(event.message.text + ' -> ' + respone);
    bot.reply(event.replyToken, respone);
});

const app = express();
const linebotParser = bot.parser();
app.post('/', linebotParser);

var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
});
