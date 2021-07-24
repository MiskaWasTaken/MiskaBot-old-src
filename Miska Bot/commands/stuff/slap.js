const discord = require('discord.js');
const HMfull = require("hmfull");

module.exports.run = async (Client, message, args, prefix) => {
    
    if(!message.content.startsWith(prefix)) return;
    let slap = HMfull.HMtai.sfw.slap()

    const imageEmbed = new discord.MessageEmbed()
    .setColor('#16a157')
    .setImage(slap.url)
    .setTimestamp()
    .setFooter('SFW')

    message.channel.send(imageEmbed)
    
}

module.exports.help = {
    name: `slap`,
    aliases: ["sfw_slap"]
};
