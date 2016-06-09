$('#woot').click();

API.sendChat("/cap 1");
API.chatLog('AUTOWOOT <font color=darkred>ONLINE</font>!');

API.on(API.CHAT, chat);
API.on(API.ADVANCE, advance);

function advance(obj){
$('#woot').click();
}
