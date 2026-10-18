import { SlashCommandBuilder, EmbedBuilder } from 'discord.js';

export default {
  data: new SlashCommandBuilder()
    .setName('info')
    .setDescription('Informazioni su GrandeBot e sul suo creatore'),

  async execute(interaction) {
    const embed = new EmbedBuilder()
      .setColor(0x00D4FF)
      .setTitle('👑 GrandeBot')
      .setDescription(
        'Il bot Discord di **Alessandro Magno il Grande**.\n' +
        'Studente, builder e amico di [zema-tech](https://github.com/zema-tech).'
      )
      .addFields(
        { name: '👨‍💻 Creatore', value: 'Alessandro Magno il Grande', inline: true },
        { name: '🚀 Status', value: 'In Development', inline: true },
        { name: '📚 Ispirazione', value: '[zema-tech](https://github.com/zema-tech) & ZealBot', inline: true },
        {
          name: '🎯 Missione',
          value: 'Imparare costruendo bot Discord e sperimentando con AI.',
        }
      )
      .setFooter({ text: 'Made with ⚡ by Alessandro' })
      .setTimestamp();

    await interaction.reply({ embeds: [embed] });
  },
};