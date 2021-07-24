  const discord = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {
     if(!message.content.startsWith(prefix)) return;

     
     if (!message.member.permissions.has("MANAGE_MESSAGES", "ADMINSTRATOR"))
     return message.channel.send(permEmbed);


 if (!args[0]) {
     return message.reply(valueEmbed) 
 }
 

 let deleteAmount;
 
 
 if (parseInt(args[0]) > 100 ) {
     deleteAmount = 100;


 } else {


   
     if(isNaN(args[0])) return message.channel.send(valueEmbed)
    
    
     deleteAmount = parseInt(args[0]);
 }
 

 message.channel.bulkDelete(deleteAmount, true);


 message.reply(sucessEmbed)
 }
 


 const permEmbed = new discord.MessageEmbed()
 .setColor('#fc036f')
 .setTitle('Purge Command')
 .setDescription('You do not have permission to do this command!')
 .setFooter('Permission Error MANAGE_MESSAGES, ADMINSTRATOR')
 .setTimestamp()

 const valueEmbed = new discord.MessageEmbed()
 .setColor('#fc036f')
 .setTitle('Purge Command')
 .setDescription('Please enter a value from 1 - 100')
 .setFooter('Invalid Syntax Error')
 .setTimestamp()

 const sucessEmbed = new discord.MessageEmbed()
 .setColor('#0fdb46')
 .setTitle('Purge Command')
 .setDescription(`Successful Deletion! :+1:`)
 .setFooter('Purge Command Sucess')
 .setTimestamp()


module.exports.help = {
    name: `purge`,
    aliases: ['clear', 'delete'] 
};

