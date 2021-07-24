const discord = require('discord.js');
const moment = require(`moment`)



const verificationLevels = {
    NONE: 'None',
    LOW: 'Low',
    MEDIUM: 'Medium',
    HIGH: 'High',
    VERY_HIGHT: 'Very High'
}



const regions = {
    brazil: 'Brazil',
    europe: 'Europe',
    hongkong: 'Hong Kong',
    india: 'India',
    japan: 'Japan',
    russia: 'Russia',
    singapore: 'Singapore',
    southafrica: 'South Africa',
    sydeny: 'Sydeny',
    'us-central': 'US Central',
    'us-east': 'US East',
    'us-west': 'US West',
    'us-south': 'US South'
}

module.exports.run = async (Client, message, args, prefix) => { 
    if(!message.content.startsWith(prefix)) return; 
    

    const roles = message.guild.roles.cache.sort((a, b) => b.position - a.position).map(role => role.toString()).slice(0, -1)

 
    const members = message.guild.members.cache;
    
 
    const channels = message.guild.channels.cache;
    
    const emojis = message.guild.emojis.cache

    
    let rolesdisplay;

 
    if(roles.length < 20) {
        rolesdisplay = roles.join(' ')
    } else {
    
      
        rolesdisplay = roles.slice(20).join(' ')
    }

  
    const { guild } = message
    
    
    const { name, region, memberCount, owner } = guild
    

    const icon = guild.iconURL()

 
    var serverEmbed = new discord.MessageEmbed()
    .setColor("RANDOM") 
    
   
    .setTitle(`Server info of ${name}`)
    
 
    .setImage(message.guild.iconURL())
    
    
    .addField(`General`, [
        `**Name:** ${name}`, 
        `**ID:** ${message.guild.id}`, 
        `**Owner:** ${message.guild.owner.user.tag}`, 
        `**Region:** ${regions[message.guild.region]}`, 
        `**Boost Tier:** ${message.guild.premiumTier ? `Tier ${message.guild.premiumTier}` : 'None'}`, 
        `**Verification Level:** ${verificationLevels[message.guild.verificationLevel]}`, 
        `**Boost Level:** ${message.guild.premiumSubscriptionCount || '0'}`, 
        `**Created At:** ${moment(message.guild.createdTimestamp).format('LT')} ${moment(message.guild.createdTimestamp).format('LL')} ${moment(message.guild.createdTimestamp).fromNow()}`,
        '\u200b'
    ])
    
   
    .addField('Stats', [
        `**Role Count:** ${roles.length}`, 
        `**Emoji Count:** ${emojis.size}`, 
        `**Normal Emoji Count:** ${emojis.filter(emoji => !emoji.animated).size}`, 
        `**Animated Emoji Count:** ${emojis.filter(emoji => emoji.animated).size}`,
        `**Member Count:** ${message.guild.memberCount}`, 
        `**Humans:** ${members.filter(member => !member.user.bot).size}`, 
        `**Bots:** ${members.filter(member => member.user.bot).size}`, 
        `**Online:** ${members.filter(member => member.presence.status === 'online').size}`, 
        `**Offline:** ${members.filter(member => member.presence.status === 'offline').size}`, 
        `**Do Not Disturb:** ${members.filter(member => member.presence.status === 'dnd').size}`, 
        `**Idle:** ${members.filter(member => member.presence.status === 'idle').size}`,
        `**Text Channels:** ${channels.filter(channel => channel.type === 'text').size}`, 
        `**Voice Channels:** ${channels.filter(channel => channel.type === 'voice').size}`, 
        '\u200b'
    ])
    
    
    .addField(`Roles [${roles.length - 1}]`, rolesdisplay)
    
    
    message.channel.send(serverEmbed)
}
module.exports.help = {
    name: "serverinfo",
    aliases: ['server-info', 'server']
}