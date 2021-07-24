const discord = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {
    
    if(!message.content.startsWith(prefix)) return;

    const inviteEmbed = new discord.MessageEmbed()
    .setColor('#03dbfc')
    .setTitle('Invite This bot! Thank you :D')
    .setDescription('https://discord.com/oauth2/authorize?client_id=847828846597373973&permissions=506719734&scope=bot')
    .setTimestamp()

    message.channel.send(inviteEmbed)
    
}

module.exports.help = {
    name: `invite`,
    aliases: ["invite_bpt"]
};