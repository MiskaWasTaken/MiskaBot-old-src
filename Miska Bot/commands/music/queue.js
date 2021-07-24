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
    let queue = await Client.distube.getQueue(message)

    const dsEmbed = new discord.MessageEmbed()
    .setColor('#03dbfc')
    .setTitle('Music Command')
    .setDescription('Bot disconnected!')
    .setTimestamp()
    .setFooter('Successful Disconnect')
    
    if(!queue) message.channel.send(dsEmbed)
    const q = queue.songs.map((song, i) => `${i === 0 ? "Playing:" : `${i}.`} ${song.name} - \`${song.formattedDuration}\``).join("\n")
    message.channel.send(q)
    
        
}

module.exports.help = {
    name: 'queue',
    aliases: []
}