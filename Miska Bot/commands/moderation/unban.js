const discord = require("discord.js")

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return

    const upermEmbed = new discord.MessageEmbed()
    .setColor('#03dbfc')
    .setTitle('Unban Command')
    .setDescription('You do not have permission to do execute this command!')
    .setTimestamp()
    .setFooter('Permission Error BAN_MEMBERS')

    if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply(upermEmbed)

    const bpermEmbed = new discord.MessageEmbed()
    .setColor('#03dbfc')
    .setTitle('Unban Command')
    .setDescription('I do not have permission to do execute this command! (Please give me BAN_MEMBERS permission)')
    .setTimestamp()
    .setFooter('Permission Error Bot End')

    if(!message.member.guild.me.hasPermission("BAN_MEMBERS")) return message.reply(bpermEmbed)

    let reason = args.slice(1).join(" ")
    let userId = args[0]

    if(!reason) reason = 'No reason provided';

    const iniEmbed = new discord.MessageEmbed()
    .setColor('#03dbfc')
    .setTitle('Unban Command')
    .setDescription('Please Provide a Valid ID to unabn')
    .setTimestamp()
    .setFooter('Error Invalid ID')

    if(!userId) return message.channel.send(iniEmbed)

    const idnEmbed = new discord.MessageEmbed()
    .setColor('#03dbfc')
    .setTitle('Unban Command')
    .setDescription('Please Provide The ID Of The User To Unban')
    .setTimestamp()
    .setFooter('Error ID Not Provided')

    if(isNaN(userId)) return message.channel.send(idnEmbed)

    message.guild.fetchBans().then(async bans => {

        const bannullEmbed = new discord.MessageEmbed()
        .setColor('#03dbfc')
        .setTitle('Unban Command')
        .setDescription('Nobody in this server is banned!')
        .setTimestamp()
        .setFooter('Error ban.size = 0')
    
        if(bans.size === 0) return message.channel.send(bannullEmbed)
        let BannedUser = bans.find(ban => ban.user.id == userId)

        const nbanEmbed = new discord.MessageEmbed()
        .setColor('#03dbfc')
        .setTitle('Unban Command')
        .setDescription('That user is not banned!')
        .setTimestamp()
        .setFooter('Error User Is Not Banned')

        if(!BannedUser) return message.channel.send(nbanEmbed)
        await message.guild.members.unban(BannedUser.user, reason).catch(err =>{

            const errEmbed = new discord.MessageEmbed()
            .setColor('#03dbfc')
            .setTitle('Unban Command')
            .setDescription('Something went wrong!')
            .setTimestamp()
            .setFooter('Error Undefined error please contact Miska#0229')

            return message.channel.send(errEmbed)
        }).then(() => {

            const sucEmbed = new discord.MessageEmbed()
            .setColor('#03dbfc')
            .setTitle('Unban Command')
            .setDescription(`${userId} Is Now Unbanned`)
            .setTimestamp()
            .setFooter('Successful Unban')

            message.channel.send(sucEmbed)
        })
    })
}

module.exports.help = {
    name: 'unban',
    aliases: []
}