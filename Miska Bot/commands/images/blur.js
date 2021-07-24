const Discord = require('discord.js')
const DIG = require("discord-image-generation");

module.exports.run = async (Client, message, args, prefix) => {

 if(!message.content.startsWith(prefix)) return;

        // Get the avatarUrl of the user
        let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
        // Make the image
        let img = await new DIG.Blur().getImage(`<Avatar>`, `<Level(Number)>`);
        // Add the image as an attachement
        let attach = new Discord.MessageAttachment(img, "delete.png");;
        message.channel.send(attach)
    }

module.exports.help = {
    name: 'blur',
    aliases: []
}