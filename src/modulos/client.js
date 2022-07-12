module.exports = (token) => {
  const Discord = require('discord.js')
  const client = new Discord.Client({ intents: [
    Discord.Intents.FLAGS.GUILDS,
    Discord.Intents.FLAGS.GUILD_MEMBERS,
    Discord.Intents.FLAGS.GUILD_MESSAGES,
    Discord.Intents.FLAGS.GUILD_PRESENCES,
    Discord.Intents.FLAGS.GUILD_VOICE_STATES    
  ]})

  client.login(token).then(() => {
    console.log("[CLIENT] - client conectado!")
  })
}