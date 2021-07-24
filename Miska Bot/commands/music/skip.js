
const discord = require('discord.js')
const distube = require('distube')

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return

    const joinEmbed = new discord.MessageEmbed()
    .setColor('#03dbfc')
    .setTitle('Music Command')
    .setDescription('Please join a voice channel accessible by the bot before using this command!')
    .setTimestamp()
    .setFooter('Join Error User Not In Channel')

    if(!message.member.voice.channel) return message.reply(joinEmbed)
    const queue = Client.distube.getQueue(message)

    const pEmbed = new discord.MessageEmbed()
    .setColor('#03dbfc')
    .setTitle('Music Command')
    .setDescription('There is nothing playing!')
    .setTimestamp()
    .setFooter('Error Nothing Is Playing')

    if(!queue) return message.channel.send(pEmbed)
    Client.distube.skip(message)

    const sEmbed = new discord.MessageEmbed()
    .setColor('#03dbfc')
    .setTitle('Music Command')
    .setDescription('Song is skipped!')
    .setTimestamp()
    .setFooter('Song has been skipped')

    message.channel.send(sEmbed)
}

module.exports.help = {
    name: 'skip',
    aliases: []
}