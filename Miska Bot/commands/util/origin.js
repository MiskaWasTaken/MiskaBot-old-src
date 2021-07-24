const discord = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {
    
    if(!message.content.startsWith(prefix)) return;

    const ownerEmbed = new discord.MessageEmbed()
    .setColor('#03dbfc')
    .setTitle('Origin Story')
    .setDescription('Originated as a meme from HSC server, dont bother googeling it u wont find it, thx holler')
    .setTimestamp()

    message.channel.send(ownerEmbed)
    
}

module.exports.help = {
    name: `origin`,
    aliases: ["originstory"]
};
