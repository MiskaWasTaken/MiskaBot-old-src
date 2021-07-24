const discord = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {

  if(!message.content.startsWith(prefix)) return;

  const permEmbed = new discord.MessageEmbed()
  .setColor('#ff0000')
  .setTitle('You do not have permission to use this command!')
  .setDescription('If you think this is a mistake please contact the server moderators')
  .setTimestamp()
  .setFooter('Permission Error BAN_MEMBERS, ADMINISTRATOR')

    // the permission a member needs to ban
    if(!message.member.hasPermission('BAN_MEMBERS', 'ADMINISTRATOR'))
    // if someone doesnt have perms send this
    message.channel.send(permEmbed);

    else {
      if (!message.guild) return;
  
      const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
  
      if (user) {
  
        const member = message.guild.member(user);
  
        if (member) {
  
          member

          // banning code 
            .ban({
                // the reason
              reason: 'They were bad!',
            })
            .then(() => {

            const sucEmbed = new discord.MessageEmbed()
            .setColor('#7303fc')
            .setTitle('Ban Command')
            .setDescription('User has been successfully banned!')
            .setTimestamp()
            .setFooter('Moderation')

              message.reply(sucEmbed);
            })
            // log err in the console
            .catch(err => {
              
              const errorEmbed = new discord.MessageEmbed()
              .setColor('#fc036f')
              .setTitle('Ban Command')
              .setDescription('Unable to ban user!')
              .setTimestamp()
              .setFooter('Moderation Error')

              message.reply(errorEmbed);
  
              console.error(err);
            });
        } else {
          

          const notEmbed = new discord.MessageEmbed()
          .setColor('#fc036f')
          .setTitle('Ban Command')
          .setDescription('That user is not in this guild!')
          .setTimestamp()
          .setFooter('Moderation Error')

          message.reply(notEmbed);
        }
      } else {
       

       const invalidEmbed = new discord.MessageEmbed()
       .setColor('#fc036f')
       .setTitle('Ban Command')
       .setDescription('You did not mention the user to ban!')
       .setTimestamp()
       .setFooter('Moderation Error')

        message.reply(invalidEmbed);
      }
  };
}

module.exports.help = {
    name: `ban`,
    aliases: []
};