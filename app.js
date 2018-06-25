const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const sql = require("sqlite");
sql.open("./score.sqlite");

client.on('ready',() => {
	console.log(`Bot is gestart, met ${client.users.size} users, in ${client.channels.size} channels en ${client.guilds.size} guilds.`);
	client.user.setActivity(`Draait momenteel op ${client.guilds.size} servers`);
})

client.on("message", async message => {
	//Negeer commands van andere bots zodat we geen spam loop krijgen.
	if(message.author.bot) return;
	//Negeer commands die niet starten met onze prefix.
	if(message.content.indexOf(config.prefix) !== 0) return;

	//Hier defineren we de command en delen dit op in verschillende argumenten.
	//Voorbeeld command "//hallo ik ben Dean", krijg je de volgende resultaat
	//command === hallo
	//args = ["ik", "ben", "Dean"];
	const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();

	//Alleen gebruikers met de rol "Nani!?" kunnen roles toevoegen aan gebruikers.
	if(message.member.roles.some(r=>["Nani!?"].includes(r.name)) ) {
		if (command === "addrole") {
		  let [user, role] = args;
			let userToModify = message.mentions.members.first();
			let roleToAdd = message.mentions.roles.first();
			userToModify.addRole(roleToAdd).catch(console.error);

		  message.reply(`gives ${user}, the following role ${role}`);
		}
	}

	if (command === "test") {
		message.channel.send("Bot is live!");
	}

});

client.login(config.token);
