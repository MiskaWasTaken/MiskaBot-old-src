const discord = require('discord.js')

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return

    const upermEmbed = new discord.MessageEmbed()
    .setColor('#03dbfc')
    .setTitle('Lock Command')
    .setDescription('You do not have permission to do execute this command!')
    .setTimestamp()
    .setFooter('Permission Error MANAGE_CHANNELS')

    if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply(upermEmbed)

    let msg = await message.channel.send("Loading...")

    try {
        message.channel.updateOverwrite(message.guild.roles.cache.find(e => e.name.toLowerCase().trim() == "@everyone"), {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
        })
        msg.edit("Successfully Locked the channel!")
    }catch(e) {
        console.log(e)
    }
}

module.exports.help = {
    name: 'lock',
    aliases: []
}