const main = (token) => {
  const Discord = require('discord.js')
  const Client = new Discord.Client({
    intents: [
      Discord.Intents.FLAGS.GUILDS,
      Discord.Intents.FLAGS.GUILD_MEMBERS,
      Discord.Intents.FLAGS.GUILD_MESSAGES,
      Discord.Intents.FLAGS.GUILD_PRESENCES,
      Discord.Intents.FLAGS.GUILD_VOICE_STATES
    ],
    allowedMentions: { parse: ['users','roles'], repliedUser: true}
  })

  module.exports.Client = Client;


  Client.login(token).then(() => {
    console.log("[CLIENT] - client conectado!")
  }).catch(() => {
    console.log("[CLIENT - ERROR] - erro ao tentar se conectar!")
  })
}

module.exports.main = main;