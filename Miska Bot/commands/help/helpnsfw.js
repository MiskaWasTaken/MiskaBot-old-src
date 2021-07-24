const discord = require('discord.js')
const pagination = require('discord.js-pagination');

module.exports.run = async (Client, message, prefix, args) => {
    if(!message.content.startsWith(prefix)) return;

    const nsfwEmbed = new discord.MessageEmbed()
    .setColor('#ff0000')
    .setTitle('Please use this command in nsfw marked channels only!')
    .setDescription('Listen you dummy, please use this command in nsfw channels only!')
    .setImage('https://i.imgur.com/oe4iK5i.gif')
    .setTimestamp()
    .setFooter('Channel Flag Error')

if(!message.channel.nsfw){ message.channel.send(nsfwEmbed); return; }

    const page1 = new discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle('Help Command')
    .setDescription('This is the nsfw help page for Miska Bot! Reactions will expire in 3 minutes!')
    .setTimestamp()


    const page2 = new discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle('Help Command')
    .setDescription('This is the NSFW Command Page for Miska Bot!')
    .addFields(
		{ name: 'Avalible NSFW Commands:', value: ` $ass => Do i really have to give a description? \n \n $cum => Do i really have to give a description? \n \n $creampie   => Do i really have to give a description? \n \n $manga   => Do i really have to give a description? \n \n  $femdom   => Do i really have to give a description? \n \n  $hentai   => Do i really have to give a description? \n \n $masturbation   => Do i really have to give a description? \n \n $public   => Do i really have to give a description? \n \n $ero   => Do i really have to give a description? \n \n $hll => To see a lewd hololive r34` })
    .setTimestamp()


    const page3 = new discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle('Help Command')
    .setDescription('This is the NSFW Second Command Page for Miska Bot!')
    .addFields(
		{ name: 'Avalible NSFW Commands Second Page!:', value: ` $orgy => Do i really have to give a description? \n \n $elves => Do i really have to give a description? \n \n $yuri => Do i really have to give a description? \n \n $pantsu => Do i really have to give a description? \n \n $cuckold => Do i really have to give a description? \n \n $blowjob => Do i really have to give a description? \n \n $boobjob => Do i really have to give a description? \n \n $foot => Do i really have to give a description? \n \n $thighs => Do i really have to give a description? \n \n $pussy => Do i really have to give a description? \n \n $ahegao => Do i really have to give a description? \n \n $uniform => Do i really have to give a description? \n \n $gangbang => Do i really have to give a description? \n \n $tentacles => Do i really have to give a description? \n \n $gif => Do i really have to give a description? \n \n $nsfwmwall => Do i really have to give a description? \n\n $nsfwneko => Do i really have to give a description?` })
    .setTimestamp()

    const page4 = new discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle('Help Command')
    .setDescription('This is the end of the NSFW help for Miska Bot!')
    .setTimestamp()


    const pages = [
        page1,
        page2,
        page3,
        page4
    ]

    const emoji = ["⏪", "⏩"]

    const timeout = '180000'

    pagination(message, pages, emoji, timeout)
}

module.exports.help = {
    name: 'helpnsfw',
    aliases: []
}