const discord = require('discord.js');
const HMfull = require("hmfull");

module.exports.run = async (Client, message, args, prefix) => {
    
    if(!message.content.startsWith(prefix)) return;
    let neko = HMfull.HMtai.sfw.neko()

    const imageEmbed = new discord.MessageEmbed()
    .setColor('#16a157')
    .setImage(neko.url)
    .setTimestamp()
    .setFooter('Hentai SFW')

    message.channel.send(imageEmbed)
    
}

module.exports.help = {
    name: `neko`,
    aliases: ["sfw_neko"]
};

