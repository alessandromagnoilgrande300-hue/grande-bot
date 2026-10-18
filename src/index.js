import { Client, GatewayIntentBits, Collection, REST, Routes } from 'discord.js';
import dotenv from 'dotenv';
import { readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __dirname = dirname(fileURLToPath(import.meta.url));

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.commands = new Collection();

// Carica i comandi
const commandsPath = join(__dirname, 'commands');
const commandFiles = readdirSync(commandsPath).filter(file => file.endsWith('.js'));

const commands = [];

for (const file of commandFiles) {
  const command = await import(`./commands/${file}`);
  client.commands.set(command.default.data.name, command.default);
  commands.push(command.default.data.toJSON());
}

// Registra i comandi slash
const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN);

try {
  console.log('🚀 Registrazione comandi slash...');
  await rest.put(
    Routes.applicationCommands(process.env.CLIENT_ID),
    { body: commands }
  );
  console.log('✅ Comandi registrati con successo!');
} catch (error) {
  console.error('Errore nella registrazione dei comandi:', error);
}

client.once('ready', () => {
  console.log(`👑 GrandeBot è online come ${client.user.tag}!`);
  client.user.setActivity('conquistare server 🌍', { type: 0 });
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  const command = client.commands.get(interaction.commandName);
  if (!command) return;

  try {
    await command.execute(interaction);
  } catch (error) {
    console.error(error);
    await interaction.reply({
      content: '⚠️ Qualcosa è andato storto, Alessandro sta investigando...',
      ephemeral: true,
    });
  }
});

client.login(process.env.DISCORD_TOKEN);