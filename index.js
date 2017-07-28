var express = require("express");
var app = express();
var SlackBot = require('slackbots');

var bot = new SlackBot({
    token: process.argv[2], 
    name: 'JokeBot'
});
 
var jokes = [
    "I changed my password to 'incorrect'. So whenever I forget what it is the computer will say 'Your password is incorrect.'", 
    
    "A computer once beat me at chess, but it was no match for me at kick boxing.",
    
    "My internet is so slow, it's just faster to drive to the Google headquarters and ask them stuff in person.",
    
    "Wifi went down during family dinner tonight. One kid started talking and I didn't know who he was.",
    
    "It's ok computer, I go to sleep after 20 minutes of inactivity too.",
    
    "Maybe if we start telling people the brain is an app they will start using it.",
    
    "My mom said that if I don't get off my computer and do my homework she'll slam my head on the keyboard, but I think she's jokinfjreoiwjrtwe4to8rkljreun8f4ny84c8y4t58lym4wthylm", 
    
    "Happy 3 week anniversary to the 26 browser tabs I have open.", 
    
    "What was Forrest Gump's email password? '1forrest1'",
    
    "I opened Outlook Calendar at work today. It looked like a bad game of Tetris.", 
    
    "What does a baby computer call its father? Data.",
    
    "My friend thinks he is smart. He told me an onion is the only food that makes you cry, so I threw a coconut at his face.",
    
    "What do you call the security outside of a Samsung Store? Guardians of the Galaxy.", 
    
    "Instead of 'the John', I call my toilet 'the Jim'. That way it sounds better when I say I go to the Jim first thing every morning.", 
    
    "What's the object-oriented way to become wealthy? Inheritance.", 
    
    "Why did the programmer quit his job? Because he didn't get arrays.", 
    
    "Why do Java programmers have to wear glasses? Because they don't C#.",
    
    "How do you tell HTML5 from HTML? Try it out in Internet Explorer. Did it work? No? It's HTML5.",
    
    "99 little bugs in the code, 99 bugs in the code, 1 bug fixed - compile again, 100 little bugs in the code.", 
    
    "Where there's a will, there's a relative.", 
    
    "My wife just found out I replaced our bed with a trampoline; she hit the roof.",
    
    "C program run. C program crash. C programmer quit.",
    
    "Ever notice how fast Windows runs? Neither did I.",
    
    "Error, no keyboard. Press F1 to continue.",
    
    "I used to be indecisive. Now I'm not sure.", 
    
    "There are so many scams on the Internet these days....but for $19.95 I can show you how to avoid them",
    
//    "I'm great at multitasking. I can waste time, be unproductive, and procrastinate all at once.",
    
//    "I would lose weight, but I hate losing.",
    
//    "Does running late count as exercise?",
    
    "CAPS LOCK – Preventing Login Since 1980.",
    
    "If at first you don’t succeed; call it version 1.0.",
    
    "My software never has bugs. It just develops random features.",
    
    "I would love to change the world, but they won’t give me the source code.",
    
    "If you give someone a program, you will frustrate them for a day; if you teach them how to program, you will frustrate them for a lifetime.",
    
    "My attitude isn’t bad. It’s in beta."
];

bot.on('message', function(data) {
    var params = {
        icon_url: 'http://i3.kym-cdn.com/entries/icons/original/000/019/601/smilelaugh.jpg'
    }
    if (data.content && data.content.indexOf("joke") != -1) {
        bot.postMessageToUser(data.subtitle, jokes[(Math.round(Math.random() *  jokes.length))], params); 
    } else {
        bot.postMessageToUser(data.subtitle, "Ask me for a joke by saying 'joke' anywhere in your message!", params);    
    }
});
       

app.listen(1337);
console.log("jokebot started");
//node index.js token to run