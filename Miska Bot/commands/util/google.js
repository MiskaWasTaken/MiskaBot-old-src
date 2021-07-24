
const googleIt = require('google-it')
const Discord = require(`discord.js`);

module.exports.run = async (Client, message, args, prefix) => {


    const nsfwEmbed = new Discord.MessageEmbed()
    .setColor('#ff0000')
    .setTitle('Please use this command in nsfw marked channels only!')
    .setDescription('Listen you dummy, please use this command in nsfw channels only!')
    .setImage('https://i.imgur.com/oe4iK5i.gif')
    .setTimestamp()
    .setFooter('Channel Flag Error, Google command is set as nsfw since some people can use this command to search nsfw topics')

if(!message.channel.nsfw){ message.channel.send(nsfwEmbed); return; }

    const embed = new Discord.MessageEmbed()
        .setTitle("Google Search Results")
        .setColor('RANDOM')
        .setTimestamp()
            

    googleIt({'query': args[0]}).then(results => {
        results.forEach(function(item, index) { 
            embed.addField((index + 1) + ": " + item.title, "<" + item.link + ">");
        });
        
        message.channel.send(embed);
    }).catch(e => {
        // any possible errors that might have occurred (like no Internet connection)
    });
};

module.exports.help = {
    name: 'google',
    aliases: []
}

