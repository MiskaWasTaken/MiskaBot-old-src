const discord = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {
    
    if(!message.content.startsWith(prefix)) return;

    const ownerEmbed = new discord.MessageEmbed()
    .setColor('#03dbfc')
    .setTitle('Credits')
    .setDescription('Miska#0229 created me, Special thanks to: UltraX and Glowstik! And Dank Memer!')
    .setTimestamp()

    message.channel.send(ownerEmbed)
    
}

module.exports.help = {
    name: `credits`,
    aliases: ["owner"]
};