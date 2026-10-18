import { SlashCommandBuilder, EmbedBuilder } from 'discord.js';

const frasi = [
  '"Non ho paura di un esercito di leoni guidato da una pecora. Ho paura di un esercito di pecore guidato da un leone."',
  '"Non c'è niente di impossibile per chi ci prova."',
  '"Io non sono venuto a perdere tempo... sono venuto a costruire."',
  '"Il vero conquistatore non è chi vince guerre, ma chi impara ogni giorno."',
  '"Anche Alessandro Magno ha iniziato da studente."',
  '"Codice pulito > eserciti enormi."',
  '"Oggi un commit, domani un impero."',
];

export default {
  data: new SlashCommandBuilder()
    .setName('grande')
    .setDescription('Ricevi una frase leggendaria da Alessandro Magno il Grande'),

  async execute(interaction) {
    const frase = frasi[Math.floor(Math.random() * frasi.length)];

    const embed = new EmbedBuilder()
      .setColor(0xFFD700)
      .setTitle('👑 Parola di Alessandro')
      .setDescription(`*${frase}*`)
      .setFooter({ text: 'GrandeBot • Sempre in learning mode' })
      .setTimestamp();

    await interaction.reply({ embeds: [embed] });
  },
};