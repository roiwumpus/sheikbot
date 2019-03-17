const Discord = require('discord.js');

var bot = new Discord.client();

bot.on("ready", function(){
bot.user.setGame("s!help pour la liste des commandes");
console.log("Le bot à bien été connecté.");
});

bot.login("NTU2ODgyNjEzNzI2MzQ3Mjc3.D3Ab8A.-f-5h3ORl1-XUuMKyRFQEnjFkqg");
