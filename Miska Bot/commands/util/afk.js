const discord = require('discord.js')
const db = require('quick.db')


module.exports.run = async (Client, message, args, prefix) => {
    
    if(!message.content.startsWith(prefix)) return;

    const content = args.join(" ")
    await db.set(`afk-${message.author.id}+${message.guild.id}`, content)

    const afkEmbed = new discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle('AFK Command')
    .setDescription(`you are now afk.\nReason: ${content}`)
    .setTimestamp()
    .setFooter('Successfuly AFK')

    message.channel.send(afkEmbed)
    
}

module.exports.help = {
    name: `afk`,
    aliases: []
};