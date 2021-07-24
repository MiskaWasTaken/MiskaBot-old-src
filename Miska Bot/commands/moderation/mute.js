const discord = require('discord.js')
//epic
const { sleep } = require('ultrax')

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return


    const upermEmbed = new discord.MessageEmbed()
    .setColor('#03dbfc')
    .setTitle('Mute Command')
    .setDescription('You do not have permission to do execute this command!')
    .setTimestamp()
    .setFooter('Permission Error MANAGE_ROLES, ADMINISTRATOR')

    if(!message.member.hasPermission("MANAGE_ROLES, ADMINISTRATOR")) return message.reply(upermEmbed)

    let member = message.mentions.members.first()
    //If nobody is mentioned send:
    if(!member) return message.channel.send('Please mention a user to mute!')
    let MutedRole = message.guild.roles.cache.find(r => r.name == 'muted')
    if(!MutedRole) {



        var rNew = await message.guild.roles.create({
            data:{
                name: 'muted',
                permissions: ["READ_MESSAGE_HISTORY", "VIEW_CHANNEL"],
            }
        }).then(e => {

            message.guild.channels.cache.each((channel) => {
     
                if (channel.type === 'voice') {
                }
       channel.updateOverwrite(e, {
                VIEW_CHANNEL: null, 
                SEND_MESSAGES: false,
                ADD_REACTIONS: false,
                READ_MESSAGE_HISTORY: true,
            })
    })
    }).then(async () => {
        sleep(1000)
    let mutedRole = message.guild.roles.cache.find(r => r.name == 'muted')
    try {
        await member.roles.add(mutedRole)
    } catch (error) {
        console.log(error)
        const Nooo = new discord.MessageEmbed()
        .setDescription("Please move my role above the muted role and the member role if it exist")
        .setColor("RED")
        return message.channel.send(Nooo)
    }        let reason = args.slice(1).join(" ")
        const embed = new discord.MessageEmbed()
        .setAuthor("Muted", member.user.displayAvatarURL({dynamic: true}))
        .setColor('GREEN')
        .addField('Moderator', `${message.author} - ${message.author.tag}`, true)
        .addField(`Muted Person`, `${member.user.tag}\nID: ${member.id}`, true)
        .addField(`Reason:`, reason ? reason : 'No reason specified', true)
        .setTimestamp()
        message.channel.send(embed)
        })

    
    } else {
        let mutedRole = message.guild.roles.cache.find(r => r.name == 'muted')
            try {
                await member.roles.add(mutedRole)
            } catch (error) {
                console.log(error)
                const Nooo = new discord.MessageEmbed()
                .setDescription("Please move my role above the muted role and the member role if it exist")
                .setColor("RED")
                return message.channel.send(Nooo)
            }
            let reason = args.slice(1).join(" ")
            const embed = new discord.MessageEmbed()
            .setAuthor("Muted", member.user.displayAvatarURL({dynamic: true}))
            .setColor('GREEN')
            .addField('Moderator', `${message.author} - ${message.author.tag}`, true)
            .addField(`Muted Person`, `${member.user.tag}\nID: ${member.id}`, true)
            .addField(`Reason:`, reason ? reason : 'No reason specified', true)
            .setTimestamp()
            message.channel.send(embed)
    }


}



module.exports.help = {
    name: 'mute',
    aliases: ['silence']
}