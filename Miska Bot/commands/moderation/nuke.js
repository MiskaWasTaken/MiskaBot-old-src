const discord = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {

    if(!message.content.startsWith(prefix)) return;



    const upermEmbed = new discord.MessageEmbed()
    .setColor('#03dbfc')
    .setTitle('Nuke Command')
    .setDescription('You do not have permission to do execute this command!')
    .setTimestamp()
    .setFooter('Permission Error ADMINISTRATOR')

    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply(upermEmbed)

   
    var channel = Client.channels.cache.get(message.channel.id)

    
    var posisi = channel.position

    channel.clone().then((channel2) => {
        
       
        channel2.setPosition(posisi)

        
        channel.delete()

        
        channel2.send(`Nuked this channel`).then(
          
            
            channel2.send(`https://tenor.com/view/explosion-explode-clouds-of-smoke-gif-17216934`)
        )
    })
}
    


module.exports.help = {
    name: `nuke`,
    aliases: ['destroy']
}