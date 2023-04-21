const {prefix} = require("../ayarlar")
const Discord = require("discord.js")

module.exports = async message => {
  let client = message.client;
  if (message.author.bot) return;
  if(message.author.id === client.user.id) return;
  if(message.channel.type === "dm") return;

  if (!message.content.startsWith(prefix)) return;
  let command = message.content.split(" ")[0].slice(prefix.length);
  let params = message.content.split(" ").slice(1);
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  if (cmd) {
    cmd.run(client, message, params);
  }
};
