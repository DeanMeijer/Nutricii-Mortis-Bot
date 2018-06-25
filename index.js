const commando = require('discord.js-commando');
const bot = new commando.Client();

bot.registry.registerGroup('random', 'Random');
bot.registry.registerGroup('pm', 'Pm');
bot.registry.registerGroup('karaoke', 'Karaoke');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands")

bot.login('NDU5NDE0ODY4NTU5Mzk2ODk0.Dg12-w.aYvz8633AH4m9dBOaI5d-N1zorE');
//######FIRST TUTORIAL######
// const Discord = require('discord.js');
// const bot = new Discord.Client();

// bot.on('message', (message) => {
//     if(message.content == 'ping'){
//         //reply @user
//         //message.reply('pong');

//         //Reply in general
//         message.channel.sendMessage('pong');
//     }
// });

// bot.login('NDU5NDE0ODY4NTU5Mzk2ODk0.Dg12-w.aYvz8633AH4m9dBOaI5d-N1zorE');