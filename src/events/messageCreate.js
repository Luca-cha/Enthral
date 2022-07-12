const home = process.cwd()
const Client = require('../modulos/client').Client

Client.on('ready', () => {
    console.log(`[EVENT] - ${Client.user.tag} ini!`)
})