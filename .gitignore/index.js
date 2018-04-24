const Discord = require('discord.js');
const client = new Discord.Client();
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('database.json')
const db = low(adapter);

var prefix = "/";
var bot = new Discord.Client();

client.login("NDM3NzI5NzQzNjU2MTg5OTU0.Db95-A.KkivJaPY-9Xk94JL_sXvTdRImQs");

bot.on("guildMemberAdd", member => {
    let role = member.guild.roles.find("name", "Novice");
    member.guild.channels.find("name", "accueil").send(`:smiley: Bienvenue à ${member.user.username} qui vient de rejoindre le serveur ! On espère que tu y passera un bon moment !`)
    member.addRole(role)
    console.log("Une nouvelle personne a rejoint le serveur, et as eu le rôle Novice !")
})

bot.on("guildMemberRemove", member => {
    member.guild.channels.find("name", "accueil").send(`:cry: ${member.user.username} vient de quitter le serveur !`)
})

client.on("ready", () => {
    console.log("Je suis connecté !");
    client.user.setGame("s'entraîner à développer");
});

client.on('message', message => {

    if(message.content === prefix + "stat"){
        message.channel.send("Je suis en développement, donc je ne suis pas encore fini !");
        console.log("Quelqu'un a demandé au bot d'effectuer la commande /stat");
    }

    if(message.content === prefix + "help"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#FF0000")
        .setTitle("Voici mes commandes !")
        .setDescription("Je suis un bot en développement, voici mes commandes disponnibles !")
        .addField("/help", "Affiche mes commandes disponnibles !")
        .addField("/stat", "Affiche mon statut !")
        .addField("/version", "Affiche ma version de développement !")
        .setFooter("Je ne suis pas encore fini, donc de nouvelles commandes arriveront plus tard !")
        message.channel.sendMessage(help_embed);
        console.log("Quelqu'un a demandé au bot d'effectuer la commande /help")
    }

    if(message.content === prefix + "version"){
        message.channel.send("Je suis en Version 0.1 !")
        console.log("Quelqu'un à demander au bot d'effectuer la commande /version")
    }

});
