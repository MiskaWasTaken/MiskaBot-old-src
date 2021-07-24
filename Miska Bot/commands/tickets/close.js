const discord = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {

    if(!message.content.startsWith(prefix)) return;

    
    const categoryID = message.member.guild.channels.cache.find(c => c.name == "TICKETS")
    
  
    if(!categoryID) return;
 
    if(!message.member.hasPermission("MANAGE_CHANNELS")) return;


    if(message.channel.parentID == categoryID){
    
        
        message.channel.delete();
    
  
    } else {
        return;
    }
}
module.exports.help = {
    name: "close",
    aliases: []
}