const Math = require('math.js');
const discord = require('discord.js');



module.exports = {


    name: 'fuck',
    description: 'fuck your friends!',
    async execute(message, args, Discord){
        images = [
            "https://img3.gelbooru.com/images/f7/ee/f7ee838c6daea30254fa80a7dd50eb9e.gif",
            "https://img3.gelbooru.com/images/3d/1a/3d1a52e386b476cafa21051caf89a57b.gif",
            "https://img3.gelbooru.com/images/41/a1/41a194e5fe4d59c07caba6cb2321c3d8.gif",
            "https://img3.gelbooru.com/images/df/d4/dfd48c194120e147491c1a63d3077bdc.gif",
            "https://img3.gelbooru.com/images/28/ed/28ed5717770c189007aa691cc004d028.gif",
            "https://img3.gelbooru.com/images/00/b6/00b674a68acd520ce9b6ae526143e837.gif",
            "https://img3.gelbooru.com/images/52/80/52802b3629154fa15204977ee60e9e3d.gif",          
            "https://img3.gelbooru.com/images/f1/74/f174b53bed05cd3e853dedd27b712fb7.gif",
            "https://img3.gelbooru.com/images/cc/19/cc19c6cb7b543218d1078a351b0ada81.gif",
            "https://img3.gelbooru.com/images/9a/ca/9aca89442131a19c7128cef87a90291f.gif",
            "https://img3.gelbooru.com/images/17/72/177208fbbfa335b1f3310d7504d87a5d.gif",
            "https://img3.gelbooru.com/images/7c/33/7c33d79ebaa963bc7aafacf76a73e482.gif",
            "https://img3.gelbooru.com/images/47/a6/47a6682b4ee00056fc16f4ce1ede88ad.gif",
            "https://img3.gelbooru.com/images/d4/dd/d4dd9cd501ac62a018fc08012ba4eb49.gif",
            "https://img3.gelbooru.com/images/4c/ce/4cce74ffdcd161f8f801f0395ed09feb.gif",
            "https://img3.gelbooru.com/images/81/c1/81c1ad1f2dfc37e642fbfa3e56b6f32f.gif",
            "https://img3.gelbooru.com/images/79/38/7938a66b3b926b5d506e408c8f477dba.gif",
            "https://img3.gelbooru.com/images/b7/04/b7041f6902f75020c7fbb5bf87a97ff8.gif",
            "https://img3.gelbooru.com/images/63/f8/63f8c4966e787af55aa904ae9b906c31.gif",
            "https://img3.gelbooru.com/images/a5/67/a56737386bd0048a3cba2bf9e8ab277d.gif",
            "https://img3.gelbooru.com/images/41/36/41367d0966f4951cec5ffd44e5ec9d30.gif",
            "https://img3.gelbooru.com/images/f5/5b/f55b63cb65c05e9a2d28390779fe36fa.gif",
            "https://img3.gelbooru.com/images/40/5a/405a37b65bbeb002b3d6e81b78f08250.gif",
            "https://img3.gelbooru.com/images/49/67/49676f0ce39457f8ccf8078d46fe36c5.gif",
            "https://img3.gelbooru.com/images/57/54/575401a6482e65d4b1a0b64daf76eec2.gif",
            "https://img3.gelbooru.com/images/24/64/2464912079ef3f3e1f76dd53b25cb39c.gif",
            "https://img3.gelbooru.com/images/56/75/5675e3b5f5c3979a1b322d73728a8a79.gif",
            "https://img3.gelbooru.com/images/b8/17/b817af11b22da915ecdb2fb99efa9adb.gif",
            "https://img3.gelbooru.com/images/19/77/1977382db91a95d79abddfaadb825f3a.gif"

        ]

        const nsfwEmbed = new discord.MessageEmbed()
        .setColor('#ff0000')
        .setTitle('Please use this command in nsfw marked channels only!')
        .setDescription('Listen you dummy, please use this command in nsfw channels only!')
        .setImage('https://i.imgur.com/oe4iK5i.gif')
        .setTimestamp()
        .setFooter('Channel Flag Error')
    
    if(!message.channel.nsfw){ message.channel.send(nsfwEmbed); return; }
    






        personFucked = message.mentions.users.first()
        if (personFucked){
        let fuckEmbed = new Discord.MessageEmbed()
            .setTitle(`You fuck ${personFucked.username} :pleading_face:`)
            .setImage(images[Math. floor(Math. random()*images. length)])
            .setTimestamp()
        
        message.channel.send(fuckEmbed)
        }
        else{
            message.channel.send('That person is not in this server!')
        }
    }
}





module.exports.help = {
    name: `fuck`, 
    aliases: ["nsfw_sex"] 
    
};