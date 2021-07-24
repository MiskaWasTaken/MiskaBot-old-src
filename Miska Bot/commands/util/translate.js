const discord = require('discord.js')
const translate = require('@iamtraction/google-translate')

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return
    const txt = args.slice(1).join(" ")
    const lang = args[0]

    const isoEmbed = new discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle('Translate Command')
    .setDescription('Please provide a ISO code of the language to translate to')
    .setTimestamp()
    .setFooter('Error ISO not provided')

    if(!lang) return message.channel.send(isoEmbed)

    const textEmbed = new discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle('Translate Command')
    .setDescription('Please provide a text to translate')
    .setTimestamp()
    .setFooter('Error text not provided')

    if(!txt) return message.channel.send(textEmbed)
    translate(txt, { to: lang }).then(res => {
        const embed = new discord.MessageEmbed()
        .setDescription(res.text)
        .setColor("GREEN")
        message.channel.send(embed); 
      }).catch(err => {
        message.channel.send(isoEmbed)
      });

}

module.exports.help = {
    name: 'translate',
    aliases: []
}