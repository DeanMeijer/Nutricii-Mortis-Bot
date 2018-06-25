const commando = require('discord.js-commando');

class pmUser extends commando.Command {
    constructor(client){
        super(client, {
            name: 'pm_user',
            group: 'pm',
            memberName: 'pm_user',
            description: 'pms user which uses command'
        });
    }

    async run(message, args){
        message.author.send("hi there" + message.author.toString());
    }
}

module.exports = pmUser;