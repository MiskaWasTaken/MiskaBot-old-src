const Discord = require('discord.js')
const DisTube = require('distube')
const SpotifyPlugin = require("@distube/spotify")
const client = new Discord.Client()
const distube = new DisTube(client, {
    searchSongs: 10,
    emitNewSongOnly: true,
    plugins: [new SpotifyPlugin({ parallel: true })]
})

// Now distube.play can play spotify url.

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return

	const args = message.content.slice(config.prefix.length).trim().split(/ +/g)
	const command = args.shift()
	if (command === 'play') distube.play(message, args.join(' '))
}