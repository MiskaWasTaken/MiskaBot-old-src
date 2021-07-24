const discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;

    const permEmbed = new discord.MessageEmbed()
    .setColor('#03dbfc')
    .setTitle('Custom Perfix/Per-server Prefix')
    .setDescription('You do not have permisson to run this command!')
    .setFooter('Permission Error ADMINISTRATOR')
    .setTimestamp()


    if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply(permEmbed)

    const newprefix = args[0]

    const nprefixEmbed = new discord.MessageEmbed()
    .setColor('#03dbfc')
    .setTitle('Custom Perfix/Per-server Prefix')
    .setDescription('You did not mention the new prefix!')
    .setFooter('Syntax Error: Prefix not mentioned!')
    .setTimestamp()


    if(!newprefix) return message.reply(nprefixEmbed)

    const lengthEmbed = new discord.MessageEmbed()
    .setColor('#03dbfc')
    .setTitle('Custom Perfix/Per-server Prefix')
    .setDescription('This prefix is too long! Make sure your new prefix is under 5 characters!')
    .setFooter('Length Error: Prefix is above 5 characters')
    .setTimestamp()


    if(newprefix.length > 5) return message.channel.send(lengthEmbed)


    const sucEmbed = new discord.MessageEmbed()
    .setColor('#008000')
    .setTitle('Custom Perfix/Per-server Prefix')
    .setDescription(`The new prefix for this server has been set to ${newprefix}`)
    .setFooter('Successful command run!')
    .setTimestamp()

    message.channel.send(sucEmbed)
    db.set(`prefix_${message.guild.id}`, newprefix);
}

module.exports.help = {
    name: "setprefix",
    aliases: ['prefixset']
}