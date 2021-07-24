const discord = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {
    
    if(!message.content.startsWith(prefix)) return;

    message.channel.send(`🏓Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(Client.ws.ping)}ms`)
    
};

module.exports.help = {
    name: `test`,
    aliases: ["ping"]
};