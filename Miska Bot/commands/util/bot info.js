const discord = require('discord.js'); 
const moment = require(`moment`) 

module.exports.run = async (Client, message, args, prefix) => { 
    if(!message.content.startsWith(prefix)) return; 

    var botEmbed = new discord.MessageEmbed() 
    .setColor(`RANDOM`) 
    .setTitle(`Bot's Info`)
    .setThumbnail(Client.user.displayAvatarURL())
    .addField(`**General**`, [ 
        `**Username:** ${Client.user.username}`, 
        `**Tag:** ${Client.user.tag}`, 
        `**ID:** ${Client.user.id}`, 
        `**Created At:** ${moment(Client.user.createdAt).format("DD-MM-YYYY [at] HH:mm")}`, 
        `**Owner:** Miska#0229, please do $credits`,
        '\u200b'
    ])
    .addField(`**Stats**`,[ 
        `**Servers:** ${Client.guilds.cache.size}`,
        `**Channels:** ${Client.channels.cache.size}`, 
        `**Users:** ${Client.users.cache.size}`, 
        `**Discord.js Version:** 12.5.1`,
        `**Node.js Version:** 2.0.4`,
        '**Custom Bot Verson:** Early Release 1.0'
    ])
    message.channel.send(botEmbed) 
}
module.exports.help = { 
    name: "botinfo", 
    aliases: ['bot', 'bot-info']
}