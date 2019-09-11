const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("RIP, !help");
    console.log("le bot a bien ete connecte");
});

bot.login("NjIxMzk3MjI0OTgyODM5MzI2.XXlKCg.BYELnXunY8c-mBHH34ZMpe2T4cY");
