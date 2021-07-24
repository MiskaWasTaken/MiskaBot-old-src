const discord = require('discord.js');
const HMfull = require("hmfull");

module.exports.run = async (Client, message, args, prefix) => {
    
    if(!message.content.startsWith(prefix)) return;
    let jahy = HMfull.HMtai.sfw.jahy()

    const imageEmbed = new discord.MessageEmbed()
    .setColor('#16a157')
    .setImage(jahy.url)
    .setTimestamp()
    .setFooter('Hentai SFW')

    message.channel.send(imageEmbed)
    
}

module.exports.help = {
    name: `jahy`,
    aliases: ["sfw_jahy"]
};