const scan = () => {

    const fs = require('fs')
    const Client = require('./client').Client
    const home = process.cwd()

    fs.readdirSync(`${home}/src/commands`).forEach(dir => {
        fs.readdir(`${home}/src/commands/${dir}`, (err, files) => {
            if (err) throw err;

            var jsFiles = files.filter(f => f.split(".").pop() === "js")

            jsFiles.forEach(file => {
                var fileGet = require(`${home}/src/commands/${dir}/${file}`);

                try {
                    Client.commands.set(fileGet.name, fileGet);

                    fileGet.help.aliases.forEach(alias => {
                        Client.aliases.set(alias, fileGet.help.name);
                    })
                } catch (err) {
                    return console.log("[CMD HANDLER - ERROR] - erro ao registrar os comandps!")
                }
            })
        })
    })
}

module.exports = scan;