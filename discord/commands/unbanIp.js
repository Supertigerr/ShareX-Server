



/*
    The command to unban ips
*/
const { MessageEmbed } = require('discord.js-light');

const banModel = require('../../models/ban');

let name = 'unbanip';
let aliases = ['uni', 'ui'];
let run = async (msg, args, owner) => {
    if (!owner) return msg.channel.send(new MessageEmbed()
        .setTitle(`You do not have the required permissions to run this command.`)
        .setColor('#4693f2'));

    if (!args[0]) return msg.channel.send(new MessageEmbed()
        .setTitle(`You must include The Ip To unBan.`)
        .setColor('#4693f2'));

    let bannedips = args[0];

    let bannedips = await banModel.findOne({ ip: bannedips });

    if (bannedips == null) return msg.channel.send(new MessageEmbed()
        .setTitle('Ip is not banned.')
        .setColor('#4693f2'));


    await banModel.deleteOne({ ip: bannedips });

    return msg.channel.send(new MessageEmbed()
        .setTitle(`banned ip: \`${bannedips}\``)
        .setColor('#4693f2'));
};

module.exports = { name, aliases, run };
