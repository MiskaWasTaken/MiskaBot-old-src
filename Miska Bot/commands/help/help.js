const discord = require('discord.js')
const pagination = require('discord.js-pagination');

module.exports.run = async (Client, message, prefix, args) => {

    if(!message.content.startsWith('$help')) return;

    const page1 = new discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle('Help Command')
    .setDescription('This is the page to recive help for Miska Bot! Note: Miska Bot is currently under early release, there will be bugs and issues, contact Miska#0229. To setup Miska Bot for its fullest potential please execute $config Use the reactions to switch pages! Reactions will expire in 3 minutes!')
    .setTimestamp()

    const page2 = new discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle('Help Command')
    .setDescription('This is the Utility Command Page for Miska Bot!')
    .addFields(
		{ name: 'Avalible Utility Commands:', value: ` $test => To get latency and api latency \n \n $giveaway => To start a giveaway example: $giveaway 1h/m/s 1(winners amount) cool hat!(item to be given away) \n \n $help   => The page you are seeing right now! \n \n $credits   => To credit everyone who helped me! \n \n  $botinfo   => To get information about this masterpiece \n \n  $serverinfo   => To see informaion about your server, server must have >1 role for this command to work \n \n $user userid   => to see information about a user, you must put the user id after $user for this command to work, example: $user 665916893579706416 \n \n $say   => to make this bot say anything you desire! example: $say then $say #channel then YOUR_MESSAGE_HERE \n \n $avatar @user   => To see someones avatar/pfp \n \n $afk <reason>   => to set your status as afk on the server \n \n $calc   => to calculate/convert anything! \n \n $invites => To see how many people you invited!`})
    .setTimestamp()


    const page3 = new discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle('Help Command')
    .setDescription('This is the Moderation Command Page for Miska Bot!')
    .addFields(
		{ name: 'Avalible Moderation Commands:', value: ` $kick => To kick a user, example $nick @miska \n \n $ban => To ban a user, example $ban @miska \n\n $unban <id> => To unban a user example: $unban 665916893579706416 \n \n $ticket => To create a ticket for help, must have category names TICKETS for this command to work \n \n $purge => to mass delete an amount of messages value is 1 - 100 \n \n $mute => to mute a member \n \n $unmute => To unmute a member who is already muted \n \n $nuke => To obliterate a channel aka delete all messages in a channel \n \n $setprefix => To set your own custom prefix! example: $setprefix ! \n \n $nick => To nick a user example: $kick @miska cool guy \n \n $lock => To lock the current channel \n \n $unlock => to unlock a locked channel`})
    .setTimestamp()


    const page4 = new discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle('Help Command')
    .setDescription('This is the Fun Command Page for Miska Bot!')
    .addFields(
		{ name: 'Avalible Fun Commands:', value: ` $covid OR $covid <country> => To see covid stats globally or for a specific country, stay home and stay safe! \n \n $meme => To get the dankest meme! \n \n $ytstats <channels> => See youtube stats for a channel! \n \n $snipe => To snipe a deleted message! \n \n $poki => To see a pokimane image you simp \n \n $google => to get google search results`})
    .setTimestamp()

    const page5 = new discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle('Help Command')
    .setDescription('This is the Music Command Page for Miska Bot!')
    .addFields(
		{ name: 'Avalible Music Commands:', value: ` $play => Play music! use a url or search for a song, when the music ends and there is no queue, bot will autoplay similar songs \n \n $stop => To stop playing a song! \n \n $queue => To see the queue for songs \n \n $skip => To skip a song`})
    .setTimestamp()


    const page6 = new discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle('Help Command')
    .setDescription('This is the end of the commands for miska bot!')
    .setTimestamp()

    const pages = [
        page1,
        page2,
        page3,
        page4,
        page5,
        page6
    ]

    const emoji = ["⏪", "⏩"]

    const timeout = '180000'

    pagination(message, pages, emoji, timeout)
}

module.exports.help = {
    name: 'help',
    aliases: []
}