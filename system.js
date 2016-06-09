$('#woot').click();

API.sendChat("/cap 1");
API.chatLog('AUTOWOOT ONLINE!');

API.on(API.CHAT, chat);
API.on(API.ADVANCE, advance);

function advance(obj){
$('#woot').click();
}
