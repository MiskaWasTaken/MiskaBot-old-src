const discord = require('discord.js');
const HMfull = require("hmfull");

module.exports.run = async (Client, message, args, prefix) => {
    
    if(!message.content.startsWith(prefix)) return;
    let lick = HMfull.HMtai.sfw.lick()

    const imageEmbed = new discord.MessageEmbed()
    .setColor('#16a157')
    .setImage(lick.url)
    .setTimestamp()
    .setFooter('Hentai SFW')

    message.channel.send(imageEmbed)
    
}

module.exports.help = {
    name: `lick`,
    aliases: ["sfw_lick"]
};
