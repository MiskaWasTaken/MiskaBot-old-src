   // require d.js module
const Discord = require('discord.js')

// create discord client
const Client = new Discord.Client({disableEveryone: true});

// make system collection 
Client.commands = new Discord.Collection();

const DIG = require("discord-image-generation");

// require the fs module
const fs = require('fs');

// require map module
const map = new Map();

// make snipe collection
const snipes = new Discord.Collection()

// to keep bot online
const keepAlive = require('./server.js')


Client.on('messageDelete', message => {
    snipes.set(message.channel.id, message)
})

// it creates a new function for our aliases
Client.aliases = new Discord.Collection();

//nsfw module
const HMfull = require("hmfull");


// node fetch module
const fetch = require('node-fetch');

// require quick.db
const db = require('quick.db'); 

//require distube
const DisTube = require('distube')



function memberCounter() {
  const guild = Client.guilds.cache.get('794739329956053063');
      setInterval(() =>{
        const userCount = guild.memberCount;
        const channel = guild.channels.cache.get('864182952937127948');
        channel.setName(`Total Members: ${userCount.toLocaleString()}`);
        console.log('Updating Member Count For Glowstiks Git Repo');
    }, 5000000);
} 


Client.distube = new DisTube(Client, { searchSongs: false, emitNewSongOnly: false });

Client.distube

.on("playSong", (message, queue, song) => {
    let playingEmbed = new Discord.MessageEmbed()
    .setColor("#FFFF00")
    .setTitle(`🎵 Now Playing 🎵`)
    .setDescription(`[**${song.name} - ${song.formattedDuration}**](${song.url})`)
    .setFooter(`Requested by ${song.user.tag}`)
    message.channel.send(playingEmbed)
})
.on("addSong", (message, queue, song) => {
    let queueEmbed = new Discord.MessageEmbed()
    .setColor("#FFFF00")
    .setTitle(`✅ Added to the Queue ✅`)
    .setDescription(`[**${song.name} - ${song.formattedDuration}**](${song.url})`)
    .setFooter(`Requested by ${song.user.tag}`)
    message.channel.send(queueEmbed)
})
.on("playList", (message, queue, playlist, song) => {

    message.channel.send(`Play \`${playlist.name}\` playlist (${playlist.songs.length} songs).\nRequested by: ${song.user}\nNow playing \`${song.name}\` - \`${song.formattedDuration}\``)
})
.on("addList", (message, queue, playlist) => message.channel.send(
    `Added \`${playlist.name}\` playlist (${playlist.songs.length} songs) to queue`
))
// DisTubeOptions.searchSongs = true
.on("searchResult", (message, result) => {
    let i = 0;
    message.channel.send(`**Choose an option from below**\n${result.map(song => `**${++i}**. ${song.name} - \`${song.formattedDuration}\``).join("\n")}\n*Enter anything else or wait 60 seconds to cancel*`);
})
// DisTubeOptions.searchSongs = true
.on("searchCancel", (message) => message.channel.send(`**Searching canceled!**`))
.on("error", (message, e) => {
    console.error(e)
    message.channel.send("An error encountered: " + e);
});



Client.on('ready', () => console.log("Distube is Active"))


// Commands Handler 

// open commands doler
fs.readdirSync('./commands/').forEach(dir => {

    //in command folder check other folders
    fs.readdir(`./commands/${dir}`, (err, files) => {

        // log error
        if (err) throw err;

         // checking if a file is .js
        var jsFiles = files.filter(f => f.split(".").pop() === "js");

         // if no command are found send
        if (jsFiles.length <= 0) {
          console.log("Can't find any commands!");
          return;
        }

        
        jsFiles.forEach(file => {

            // log loaded commands
            var fileGet = require(`./commands/${dir}/${file}`);
            console.log(`File ${file} was loaded`)

            // actually run the commands
            try {
                Client.commands.set(fileGet.help.name, fileGet);

            } catch (err) {
              // log error
                return console.log(err);
            }
        });
    });
});




Client.on("message", async (message, guild) => {
    if(message.author.bot || message.channel.type === "dm") return;

    let prefix;
    let prefixes = await db.fetch(`prefix_${message.guild.id}`);
    if(prefixes == null) {
        prefix = "$"
    } else {
        prefix =  prefixes;
    }

    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1)

    // make command work with aliases
    let commands = Client.commands.get(cmd.slice(prefix.length))

    if(commands) commands.run(Client, message, args, prefix);

    let channel = message.guild.channels.cache.find(channel => channel.name === "chat-bot")
    if(message.channel.name == 'chat-bot') {
        fetch.default(`https://api.monkedev.com/fun/chat?msg=${encodeURIComponent(message.content)}&uid=${message.author.id}`)
        .then(res => res.json())
        .then(data => {
            
          if(message.content.includes('@')){
  return message.channel.send('I am too powerful for your tricks'); return;
} 
            message.channel.send(data.response)
        })
    }



});

// log if bot is online

Client.on("ready", async () => {
    console.log(`${Client.user.username} is Online!`)
    memberCounter(Client)

    // This Will be the Status Of our Bot
    Client.user.setActivity("The FBI HQ", {type: "STREAMING", url: "https://www.youtube.com/watch?v=UdheRbl9uOQ"})
});



Client.on('message', message => {
    let prefix = db.fetch(`prefix_${message.guild.id}`);
    if(!prefix) {
    prefix = "$"
}
    if (!message.content.startsWith(prefix) || message.author.bot)return;
        const args = message.content.slice(prefix.length).split(/ +/);
        const command = args.shift().toLowerCase();
        if(command === 'hug'){
            Client.commands.get('hug').execute(message, args, Discord);
        }
        if(command === 'fuck'){
            Client.commands.get('fuck').execute(message, args, Discord);
        }
});






Client.on("message", async (message, guild) => {
    if(message.author.Client || message.channel.type === "dm") return;

    // delete afk status if message is sent

    if(db.has(`afk-${message.author.id}+${message.guild.id}`)) { // if he is afk
        const oldReason = db.get(`afk-${message.author.id}+${message.guild.id}`) // reason for afk
        await db.delete(`afk-${message.author.id}+${message.guild.id}`) // delete afterwards

        const nafkEmbed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('AFK Command')
        .setDescription(`you aren't afk anymore, Reason for afk:\n ${oldReason}`)
        .setTimestamp()

        message.reply(nafkEmbed) // send this message when user sends a message if his status is afk
    }



    // checking if someone mentioned the afk person

    if(message.mentions.members.first()) { // if someone mentioned the afk person
        if(db.has(`afk-${message.mentions.members.first().id}+${message.guild.id}`)) { // db will check if he is afk
            message.channel.send(message.mentions.members.first().user.tag + " : " + db.get(`afk-${message.mentions.members.first().id}+${message.guild.id}`)) // if yes, it get db and send message
        }
    }
})
   



  

const mySecret = process.env['TOKEN']


keepAlive();
// u cant see my token :)
Client.login(mySecret);
