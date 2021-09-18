/*
    The command used to create a user
*/
const { MessageEmbed } = require('discord.js-light');

const banModel = require('../../models/ban');


let name = 'banip';
let aliases = ['bani', 'bi'];
let run = async (msg, args, owner) => {
    if (!owner) return msg.channel.send(new MessageEmbed()
        .setTitle(`You do not have the required permissions to run this command.`)
        .setColor('#4693f2'));

    if (!args[0]) return msg.channel.send(new MessageEmbed()
        .setTitle(`You must include The Ip To Ban.`)
        .setColor('#4693f2'));
    let bannedips = args[0];

    let ipCheck = await banModel.findOne({ ip: bannedips });
    if (ipCheck !== null) return msg.channel.send(new MessageEmbed()
        .setTitle(`Ip Already Banned.`)
        .setColor('#4693f2'));

    await banModel.create({
        ip: args[0]
    });

    return msg.channel.send(new MessageEmbed()
        .setTitle('Banned IP')
        .setThumbnail('https://cdn.discordapp.com/attachments/686689269296922682/755359943242154005/0HL9FFhngVZRSKZ.png')
        .setDescription(`**IP**: \`${bannedips}`)
        .setColor('#4693f2'));
};

module.exports = { name, aliases, run };
