const discord = require('discord.js');
const HMfull = require("hmfull");

module.exports.run = async (Client, message, args, prefix) => {

    const nsfwEmbed = new discord.MessageEmbed()
    .setColor('#ff0000')
    .setTitle('Please use this command in nsfw marked channels only!')
    .setDescription('Listen you dummy, please use this command in nsfw channels only!')
    .setImage('https://i.imgur.com/oe4iK5i.gif')
    .setTimestamp()
    .setFooter('Channel Flag Error')


    if(!message.channel.nsfw){ message.channel.send(nsfwEmbed); return; }
    
    if(!message.content.startsWith(prefix)) return;
    let glasses = HMfull.HMtai.nsfw.glasses()

    const imageEmbed = new discord.MessageEmbed()
    .setColor('#16a157')
    .setImage(glasses.url)
    .setTimestamp()
    .setFooter('Hentai NSFW')
    

    message.channel.send(imageEmbed)
    
}

module.exports.help = {
    name: `glasses`,
    aliases: ["nsfw_glasses"]
};