const commando = require('discord.js-commando');

class addToList extends commando.Command {
    constructor(client){
        super(client, {
            name: 'add_to_list',
            group: 'karaoke',
            memberName: 'add_to_list',
            description: 'adds username to array'
        });
    }

    async run(message, args){
        message.reply("hi there ${sent.author.username}");
    }
}

module.exports = addToList;