const discord = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {
    
    if(!message.content.startsWith(prefix)) return;

    const shitEmbed = new discord.MessageEmbed()
    .setColor('#03dbfc')
    .setTitle('Shit Bot')
    .setDescription('I know i am')
    .setTimestamp()

    message.channel.send(shitEmbed)
    
}

module.exports.help = {
    name: `shit`,
    aliases: ["shit bot"]
};