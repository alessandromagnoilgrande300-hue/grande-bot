<div align="center">

# ⚡ ZealBot — Documentazione

### Documentazione completa del bot Discord di [zema-tech](https://github.com/zema-tech)

[![Repo ufficiale](https://img.shields.io/badge/Repo%20ufficiale-zema--tech%2Fzealbot--discord-5865F2?style=for-the-badge&logo=github)](https://github.com/zema-tech/zealbot-discord)
[![Docs ufficiali](https://img.shields.io/badge/Docs%20ufficiali-zema--tech.github.io-00D4FF?style=for-the-badge)](https://zema-tech.github.io/zealbot-discord/)
[![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](https://github.com/zema-tech/zealbot-discord/blob/main/LICENSE)

**Production-ready multi-server Discord bot**  
~85+ slash commands · Commander + Guardian · Web Dashboard · AI plug-and-play

</div>

---

## Cos'è ZealBot?

**ZealBot** è un bot Discord professionale, self-hostable e open-source creato da **[zema-tech](https://github.com/zema-tech)**.

È pensato per server medi e grandi che vogliono:
- Moderazione seria
- Economia e livelli
- Ticket professionali
- AI integrata
- Dashboard web moderna
- Architettura robusta (un modulo rotto non fa crashare tutto)

> Self-hostable · MIT · Dashboard ispirata a MEE6 · Commander + sistema immunitario (Guardian)

---

## Perché ZealBot?

| Feature | Descrizione |
|---------|-------------|
| **Commander** | Punto di ingresso unico: toggle per-server, esecuzione isolata |
| **Guardian** | Health scoring, quarantena automatica, recovery |
| **AI plug-and-play** | Una sola API key (Groq, Gemini, OpenAI, xAI…) |
| **Ticket professionali** | Claim, transcript, priority, SLA, rating |
| **Moderazione seria** | Warn con escalation, lockdown, case registry |
| **Web Dashboard** | OAuth2 Discord, griglia server, moduli configurabili |

---

## Quick Start

```bash
git clone https://github.com/zema-tech/zealbot-discord.git
cd zealbot-discord
npm install
cp .env.example .env          # imposta DISCORD_TOKEN + CLIENT_ID
node deploy-commands.js
npm start
```

```bash
npm test                      # smoke tests (senza token)
npm run dashboard             # pannello web (processo separato)
```

---

## Documentazione

### Guide principali (in questo repo)

| Documento | Contenuto |
|-----------|-----------|
| [**Installazione & Hosting**](docs/HOSTING.md) | Docker, PM2, VPS, Fly.io, Render |
| [**Configurazione**](docs/CONFIG.md) | Variabili d'ambiente e opzioni |
| [**Lista Comandi**](docs/COMMANDS.md) | Panoramica dei ~85+ slash commands |
| [**Architettura**](docs/ARCHITECTURE.md) | Commander, Guardian, moduli |

### Link ufficiali

- 💻 **Repository**: [zema-tech/zealbot-discord](https://github.com/zema-tech/zealbot-discord)
- 📚 **Docs ufficiali**: [zema-tech.github.io/zealbot-discord](https://zema-tech.github.io/zealbot-discord/)
- 📝 **README IT**: [README.it.md](https://github.com/zema-tech/zealbot-discord/blob/main/README.it.md)

---

## Aree funzionali

| Area | Cosa include |
|------|--------------|
| **Moderazione** | ban, kick, timeout, warn, clear, lockdown, cases |
| **Economia** | balance, daily, bank, shop, lottery, rob, slots |
| **Livelli** | XP chat/voce, rank, leaderboard, reward roles |
| **Ticket** | panel, claim, transcript, priority, SLA, rating |
| **AI** | `/chiedi`, summarize, brain/skills |
| **Utility** | welcome, automod, starboard, reaction roles, giveaway… |
| **Musica** | `/musica` (play, queue, skip, loop…) |

---

## Requisiti

- **Node.js 22+** (consigliato Node 24)
- Intent Discord: Guilds, GuildMessages, **Message Content**, **Server Members**, GuildModeration
- Token del bot + Client ID

---

## Supporta il progetto

Se ZealBot ti è utile, puoi supportare lo sviluppo:

- ⭐ Metti una **star** al repository ufficiale
- 💳 [Donazione Stripe](https://donate.stripe.com/test_aFa9AMegr8Me61bgAXcbC01)
- 📝 Apri issue e pull request

---

<div align="center">

**Documentazione curata da [Alessandro Magno il Grande](https://github.com/alessandromagnoilgrande300-hue)**  
*Amico e collaboratore di [zema-tech](https://github.com/zema-tech)*

<br>

[![GitHub](https://img.shields.io/badge/Repo%20ufficiale-zema--tech%2Fzealbot--discord-181717?style=for-the-badge&logo=github)](https://github.com/zema-tech/zealbot-discord)

</div>