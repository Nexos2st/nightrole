const Discord = require('discord.js');
const bot = new Discord.Client();
bot.login(process.env.TOKEN)
var prefix = ("?")

bot.on('ready', function() {
    bot.user.setPresence({ game: { name: 'ƝιgнтƑяєηcн', type: 2} })
    bot.user.setStatus('dnd');
    console.log("Connected");
});

bot.on("guildMemberAdd", member => {
    const bvn = member.guild.channels.find(m => m.name === "🎉bienvenue")
    if (!bvn) return;
    const embed = new Discord.RichEmbed()
    .setColor('#009114')
    .setAuthor(member.user.tag)
    .setThumbnail(member.user.avatarURL)
    .setDescription("J'éspère que tu te plairas a nos côté")
    .addField(`Nombre de membres après son arrivée`, member.guild.memberCount)
    .setTimestamp()
    bvn.send(embed)
})
bot.on("guildMemberRemove", member => {
    const bvn1 = member.guild.channels.find(m => m.name === "🎉bienvenue")
    if (!bvn1) return;
    const embed = new Discord.RichEmbed()
    .setColor('#FF0000')
    .setAuthor(member.user.tag)
    .setThumbnail(member.user.avatarURL)
    .setDescription("A quitté le serveur !")
    .addField(`Nombre de membres après avoir quitté`, member.guild.memberCount)
    .setTimestamp()
    bvn1.send(embed)
})

bot.on('guildMemberAdd', member => {
    var role = member.guild.roles.find('name', 'Anti-Raid')
    member.addRole(role)
})
