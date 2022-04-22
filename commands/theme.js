const { MessageEmbed } = require("discord.js");
var fs = require("fs")
const db = require('quick.db')

module.exports = {
    name: 'theme',
    aliases: ["color"],
    run: async (client, message, args) => {
let prefix =  db.get(` ${process.env.owner}.prefix`)
if(prefix === null) prefix = process.env.prefix;
  let color = db.get(`${process.env.owner}.color`) 
   if(color === null  ) color = process.env.color
    if(!message.guild) return;
    if(process.env.owner=== message.author.id  || db.get(`ownermd.${message.author.id}`) === true) {

       if (args.length) {
        let str_content = args[0]
        db.set(`${process.env.owner}.color`,str_content)
const embed = new MessageEmbed()
.setTitle(`Nouvelle couleur définie`)
.setColor(str_content)
message.channel.send(embed)
    } else {
    }

}else {}
}

}