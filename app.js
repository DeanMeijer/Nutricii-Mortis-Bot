const Discord = require('discord.js');
const client = new Discord.Client();
const settings = require('./settings.json');

client.on('ready',() => {
	console.log('i\'m Online\nI\'m Online');
})

var prefix = "//"
client.on('message', message => {
	if(message.content.startsWith(prefix + "test")) {
		message.channel.send('Nutricii Mortis bot is working!!');
	}
});

client.on('message', message => {
	if(message.content.startsWith(prefix + "Dean")) {
		message.channel.send('Dean\'s pretty fly');
	}else if (message.content.startsWith(prefix + "David")) {
		message.channel.send('David\'s pretty fly');
	}else if (message.content.startsWith(prefix + "Coconut")) {
		message.channel.send('Coconut\'s pretty cool guy!');
	}else if (message.content.startsWith(prefix + "Gunilla")) {
		message.channel.send('Gunilla\'s pretty Grill');
	}
})

client.login(settings.token);