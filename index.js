const Discord = require("discord.js");
const bot = new Discord.Client();

const config = require("./config.json");

bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}!`);

bot.user.setPresence({game: {name: 'prefix: @help | Maintance', type:0 } });
});

bot.on('message', message => {
  if(message.author.bot) return;
  if(!message.content.startsWith(config.prefix)) return;
  
  if (command === "help") {
	 message.channel.sendMessage("NeverLand bot in Maintance");
  }
  
});

bot.login(process.env.BOT_TOKEN);
