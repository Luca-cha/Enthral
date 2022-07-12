console.clear()
const bot = require('./src/modulos/client')
const { token } = require('./src/config.json')
const { name } = require('./package.json')

console.log(`[APP] - ${name} está iniciando client e dependencias!`)
bot(token)