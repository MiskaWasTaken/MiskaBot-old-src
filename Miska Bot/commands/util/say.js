const Discord = require('discord.js'); 


module.exports.run = async (Client, message, args, prefix) => { 

    if(!message.content.startsWith(prefix)) return;

    if (!message.member.permissions.has("MANAGE_MESSAGES", "ADMINSTRATOR"))
     return message.channel.send(permEmbed);

     
    if (message.content.toLowerCase() === '$say'){ 
        let filter = m => m.author.id === message.author.id; 
        let q1 = new Discord.MessageCollector(message.channel, filter, { 
            max: 1
        })
        message.channel.send('Please mention a channel to send my message to!'); 

        q1.on('collect', async (message, col) => {
            let channel = message.mentions.channels.first(); 

            message.channel.send('What message would you like me to send?') 
            q1.stop();
            let q2 = new Discord.MessageCollector(message.channel, filter, { 
                max: 1
            })
            q2.on('collect', async (message, col) => {

            
            if(message.content.includes('@')){
  return message.channel.send('Do not try to fool me mortal'); return;
} 


                channel.send(message.content);
                await message.react('👍');
                message.channel.send(`Message sent at: ${channel}!`) 
                q2.stop();



            })
        })


    }
}




 const permEmbed = new Discord.MessageEmbed()
 .setColor('#fc036f')
 .setTitle('Say Command')
 .setDescription('You do not have permission to do this command!')
 .setFooter('Permission Error MANAGE_MESSAGES')
 .setTimestamp()


module.exports.help = {
    name: "say",
    aliases: []
}