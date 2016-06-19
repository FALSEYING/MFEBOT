API.chatLog("Systém je zapnutý!");
API.on(API.CHAT, autowoot);
API.on(API.CHAT, afk);
API.on(API.CHAT, here);
API.on(API.CHAT, hello);
API.on(API.CHAT, emoji);
API.on(API.CHAT, adremove);
API.on(API.CHAT, staff);
API.on(API.CHAT, facebook);
API.on(API.CHAT, rules);

function autowoot(a){
var msg = a.message;
if (msg === "!autowoot"){
API.sendChat("RCS AutoWoot> https://rcs.radiant.dj!");
}
}

function afk(a){
var msg = a.message;
var meno = a.un;
if (msg === "!afk"){
API.sendChat("@" + meno + ", is currently away from keyboard.");
}
}

function here(a){
var msg = a.message;
var meno = a.un;
if (msg === "!here"){
API.sendChat("@" + meno + ", is here.");
}
}

function hello(a){
var msg = a.message;
var meno = a.un;
var to = a.username;
if (msg === "!hello @" + to + ""){
API.sendChat("@" + meno + " said hello to @" + to + "!");
}
}

//function emoji(a){
//var msg = a.message;
//if (msg === "!emoji"){
//API.sendChat("Emoji for MFE> https://thefalse.cekuj.net/emoji!");
//}
//}

function adremove(a){
var msg = a.message;
var from = a.uid;
if (msg === "https://plug.dj/"){
API.moderateDeleteChat(a.cid);
API.sendChat("You have been banned for sharing another room link into our community!");			
API.moderateBanUser(from, 1, API.BAN.PERMA);
}
}

function staff(a){
var msg = a.message;
if (msg === "!staff"){
API.sendChat("MFE Staff App> https://bit.ly/MFESTAFF!");
}
}

function facebook(a){
var msg = a.message;
if (msg === "!facebook"){
API.sendChat("Our Facebook page> https://bit.ly/MFEFB! Our Facebook group> https://bit.ly/MFEGROUP!");
}
}

function rules(a){
var msg = a.message;
if (msg === "!rules"){
API.sendChat("Our community rules> https://bit.ly/MFERULES!");
}
}
