  const Discord = require("discord.js");
const bot = new Discord.Client();
const snekfetch = require('snekfetch');



exports.run = async (client, message, args) => {

    const nsfwEmbed = new Discord.MessageEmbed()
    .setColor('#ff0000')
    .setTitle('Please use this command in nsfw marked channels only!')
    .setDescription('Listen you dummy, please use this command in nsfw channels only!')
    .setImage('https://i.imgur.com/oe4iK5i.gif')
    .setTimestamp()
    .setFooter('Channel Flag Error')

if(!message.channel.nsfw){ message.channel.send(nsfwEmbed); return; }


	try {
        const { body } = await snekfetch
            .get('https://www.reddit.com/r/Pokimane_nsfw_.json?sort=top&t=week')
            .query({ limit: 800 });
        const allowed = message.channel.nsfw ? body.data.children : body.data.children.filter(post => !post.data.over_18);
        if (!allowed.length) return message.channel.send('It seems we are out of hot images!, Try again later.');
        const randomnumber = Math.floor(Math.random() * allowed.length)
        const embed = new Discord.MessageEmbed()
        .setColor(0x00A2E8)
        .setTitle(allowed[randomnumber].data.title)
        .setDescription("Posted by: " + allowed[randomnumber].data.author)
        .setImage(allowed[randomnumber].data.url)
        .addField("Other info:", "Up votes: " + allowed[randomnumber].data.ups + " / Comments: " + allowed[randomnumber].data.num_comments)
        .setFooter("Boners provided by r/Pokimane_nsfw")
        message.channel.send(embed)
    } catch (err) {
        return console.log(err);
    }
}

module.exports.help = {
    name: `poki`, 
    aliases: ["pokimane"] 
    
};