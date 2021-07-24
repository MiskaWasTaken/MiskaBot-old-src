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
    const music = args.join(" ")

    const playEmbed = new discord.MessageEmbed()
    .setColor('#03dbfc')
    .setTitle('Music Command')
    .setDescription('Please provide a song to play!')
    .setTimestamp()
    .setFooter('Play Error Song Not Provided!')

    if(!music) return message.channel.send(joinEmbed)
    Client.distube.play(message, music)
}

module.exports.help = {
    name: 'play',
    aliases: ['p']
}