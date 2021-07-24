const discord = require('discord.js');
const HMfull = require("hmfull");

module.exports.run = async (Client, message, args, prefix) => {
    
    if(!message.content.startsWith(prefix)) return;
    let wallpaper = HMfull.HMtai.sfw.wallpaper()

    const imageEmbed = new discord.MessageEmbed()
    .setColor('#16a157')
    .setImage(wallpaper.url)
    .setTimestamp()
    .setFooter('SFW')

    message.channel.send(imageEmbed)
    
}

module.exports.help = {
    name: `wallpaper`,
    aliases: ["sfw_wallpaper"]
};
