const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v10');
const fs = require('node:fs');
require('dotenv').config()

const commands = [];
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    for (const com in command) {
        commands.push(command[com].toJSON());
    }
}

const rest = new REST({ version: '10'}).setToken(process.env.DiscordToken);

console.log(`Started refreshing ${commands.length} application (/) commands.`);

rest.put(Routes.applicationCommands(process.env.DiscordClientId), { body: commands });
