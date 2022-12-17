const fs = require('node:fs');
const path = require('node:path');
const { Client, Collection, Events, GatewayIntentBits } = require('discord.js');
const MusicPlayer = require('./MusicPlayer');
require('dotenv').config()

const client = new Client({ intents: [GatewayIntentBits.Guilds] });
const music = new MusicPlayer(process.env.YoutubeAPI)

client.commands = new Collection();
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles){
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);
    for(const com in command){
        client.commands.set(command[com].name, command[com])
    }
}

client.once(Events.ClientReady, c=> {
    console.log(`Ready! Logged in as ${c.user.tag}`);
})

client.on(Events.InteractionCreate, async interaction => {
    if(!interaction.isChatInputCommand()) return;

    const command = client.commands.get(interaction.commandName);
    if(!command) return;

    try {
        switch(command.name){
            case "play":
                const query = interaction.options.getString('input');
                await interaction.reply(music.play(query))
                break;
        }
    }catch (error){
        console.error(error);
        await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true});
    }
})

client.login(process.env.DiscordToken);