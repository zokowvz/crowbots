const Discord = require('discord.js')
const db = require('quick.db')

module.exports = {
    name: 'allemojis',
    aliases: ["allemojis"],
    run: async (client, message, args) => {
let prefix =  db.get(` ${process.env.owner}.prefix`)
if(prefix === null) prefix = process.env.prefix;

  module.exports.run = async(client, message, args) => {
  if(process.env.owner ===message.author.id || db.get(`ownermd.${message.author.id}`) === true || db.get(`${message.guild.id}.${message.author.id}.wlmd`) === true) {
    try {
        let notAnimated = [];
        let animated = [];
        message.guild.emojis.cache.forEach(async emoji => {
          if (emoji.animated) animated.push(emoji.toString());
          else notAnimated.push(emoji.toString());
        });
        if (!animated[0]) animated = ['None'];
        if (!notAnimated[0]) notAnimated = ['None'];
        message.channel.send('```ANIMÉS :```\n' + animated.join(' ') + '\n```NORMAUX :```\n' + notAnimated.join(' '), {split:true});
      } catch (err) {
        message.channel.send('erreur\n' + err).catch();
    } 

} else {
    
}  }
}
}