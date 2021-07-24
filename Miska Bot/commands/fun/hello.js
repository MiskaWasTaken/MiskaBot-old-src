//ignore this is for test purpose incase $test doesnt work

const discord = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {

    if(!message.content.startsWith(prefix)) return;

    message.channel.send(`hello im alive!`)
    
}

module.exports.help = {
    name: `hello`,
    aliases: ["hey"]
};