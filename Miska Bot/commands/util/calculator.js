const discord = require('discord.js')
const math = require('mathjs')

module.exports.run = async (Client, message, args, prefix) => {

const crash = [':'];

if(message.content.includes(':')){
  return message.channel.send('That question is too powerful for me!'); return;
} 

 if(!message.content.startsWith(prefix)) return;

    var question = args.join(' ') 

    if(!question) return message.channel.send('please provide a maths equation')

    let result;
    try {
        result = math.evaluate(question);


    } catch (e) {
        return message.channel.send('please provide a valid equation') 
    }


    return message.channel.send(`${question} = ${result}`)

}

module.exports.help = {
    name: `calc`,
    aliases: ["calculator"]
};