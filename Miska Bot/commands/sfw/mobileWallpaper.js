const discord = require('discord.js');
const HMfull = require("hmfull");

module.exports.run = async (Client, message, args, prefix) => {
    
    if(!message.content.startsWith(prefix)) return;
    let mobileWallpaper = HMfull.HMtai.sfw.mobileWallpaper()

    const imageEmbed = new discord.MessageEmbed()
    .setColor('#16a157')
    .setImage(mobileWallpaper.url)
    .setTimestamp()
    .setFooter('SFW')

    message.channel.send(imageEmbed)
    
}

module.exports.help = {
    name: `mwall`,
    aliases: ["sfw_mwall"]
};