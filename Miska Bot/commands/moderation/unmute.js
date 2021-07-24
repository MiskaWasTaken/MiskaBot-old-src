const discord = require('discord.js')

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return

    const upermEmbed = new discord.MessageEmbed()
    .setColor('#03dbfc')
    .setTitle('Unmute Command')
    .setDescription('You do not have permission to do execute this command!')
    .setTimestamp()
    .setFooter('Permission Error MANAGE_ROLES')

    if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply(upermEmbed)



    if (message.content.startsWith(prefix + 'unmute')) {
        if (message.member.hasPermission('MANAGE_ROLES')) {
            const role = message.guild.roles.cache.find(role => role.name === 'muted');
  
            const member = message.mentions.members.first();
            member.roles.remove(role);
               var muteChannel = message.guild.channels.cache.find(channel => channel.name.includes("mod-logs"));

                 var muteUser = message.mentions.members.first();

                    

             const sucessEmbed = new discord.MessageEmbed()
              .setColor('RANDOM')
              .setTitle('Unmute Command')
              .setDescription(`User has been unmuted`)
              .setFooter('Succesful unmute')
              .setTimestamp()

    var muteEmbed = new discord.MessageEmbed() 
    .setColor('RANDOM')
    .setTitle("Unmute Command")
    .addField("unmuted user", muteUser)
    .setFooter(`Unmuted by ${message.author.tag}`)
    .setTimestamp();

             message.channel.send(sucessEmbed);
              muteChannel.send(muteEmbed);

        } else {

              var nEmbed = new discord.MessageEmbed() 
    .setColor('RANDOM')
    .setTitle("Unmute Command")
    .addField("Please mention the user to unmute!")
    .setFooter("Error User Not Supplied")
    .setTimestamp();

            message.channel.send(nEmbed)
        }
    }
}

module.exports.help = {
    name: 'unmute',
    aliases: []
}