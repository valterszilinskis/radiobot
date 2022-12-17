const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    play: new SlashCommandBuilder()
        .setName('play')
        .setDescription('Testing play command')
        .addStringOption(option =>
            option.setName('input')
                .setDescription(`Input description`)
                .setRequired(true)),
    stop: new SlashCommandBuilder()
        .setName('stop')
        .setDescription('Testing stop command'),
};