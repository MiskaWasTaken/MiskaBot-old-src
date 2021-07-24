  
const discord = require('discord.js')

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return 

    const upermEmbed = new discord.MessageEmbed()
    .setColor('#03dbfc')
    .setTitle('Nick Command')
    .setDescription('You do not have permission to do execute this command!')
    .setTimestamp()
    .setFooter('Permission Error MANAGE_NICKNAMES, ADMINISTRATOR')

    if(!message.member.hasPermission("MANAGE_NICKNAMES, ADMINISTRATOR")) return message.reply(upermEmbed)

    let user = message.mentions.users.first()
    if(!user) return message.reply("**Please mention a User to change his nickname!**")

    let nickname = args.slice(1).join(" ") // $nickname <user> <nickname>
    if(!nickname) return message.reply("**Please specify a nickname!**")

    let member = message.guild.members.cache.get(user.id);
    await member.setNickname(nickname);

    const embed = new discord.MessageEmbed()
    .setTitle("✅ Done!")
    .setDescription(`successfully changed ${user.tag}'s nickname to ${nickname}`)
    .setColor('RANDOM')
    .setTimestamp()
    message.channel.send(embed)
}

module.exports.help = {
    name: 'nick',
    aliases: ['nickname']
}