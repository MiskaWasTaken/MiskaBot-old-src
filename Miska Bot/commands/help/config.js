const discord = require('discord.js')
const pagination = require('discord.js-pagination');

module.exports.run = async (Client, message, prefix, args) => {

    if(!message.content.startsWith('$config')) return;

    const page1 = new discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle('Miska Bot Config')
    .setDescription('Welcome to Miska Bot config section, this interactive embed will show you how to properly configure Miska Bot to its fullest potential. You may choose to disable a command by not adding its config.')
    .setTimestamp()
    .setThumbnail('https://i.imgur.com/SjNeoyb.png')
    

    const page2 = new discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle('Miska Bot Config Tickets')
    .setDescription('To setup the $ticket command please do the following: Create a category called: "TICKETS" if you choose to not to want the $tickets command you may skip this step')
    .setTimestamp()
    .setThumbnail('https://i.imgur.com/SjNeoyb.png')

    const page3 = new discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle('Miska Bot Config AI Chat Bot')
    .setDescription('To setup and use the AI chat bot integrated into Miska Bot, do the following: Create a new channel called "chat-bot" this channel must be accessible by the bot, and your done! Try chatting in the channel!')
    .setTimestamp()
    .setThumbnail('https://i.imgur.com/SjNeoyb.png')

    const page4 = new discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle('Miska Config Moderation Permissions')
    .setDescription('$ban => BAN_MEMBERS or/and ADMINISTRATOR \n \n $kick => KICK_MEMBERS or/and ADMINISTRATOR \n \n $lock => MANAGE_CHANNELS \n \n $mute => MANAGE_ROLES and/or ADMINISTRATOR $nick => MANAGE_NICKNAMES and/or _ADMINISTRATOR \n \n $nuke => ADMINISTRATOR \n \n $unban => BAN_MEMBERS and/or ADMINISTRATOR \n \n $unlock => MANAGE_CHANNELS \n \n $setprefix <prefix> ADMINISTRATOR')
    .setTimestamp()
    .setThumbnail('https://i.imgur.com/SjNeoyb.png')



    const pages = [
        page1,
        page2,
        page3,
        page4
    ]

    const emoji = ["⏪", "⏩"]

    const timeout = '100000'

    pagination(message, pages, emoji, timeout)
}

module.exports.help = {
    name: 'config',
    aliases: []
}