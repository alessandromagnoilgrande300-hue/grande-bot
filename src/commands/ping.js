import { SlashCommandBuilder } from 'discord.js';

export default {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Controlla se GrandeBot è vivo'),

  async execute(interaction) {
    const sent = await interaction.reply({
      content: '👑 Calcolo la latenza...',
      fetchReply: true,
    });

    const latency = sent.createdTimestamp - interaction.createdTimestamp;

    await interaction.editReply(
      `👑 **Pong!**\n` +
      `⏱️ Latenza: **${latency}ms**\n` +
      `📡 API: **${Math.round(interaction.client.ws.ping)}ms**\n\n` +
      `*GrandeBot è operativo, mio signore.*`
    );
  },
};