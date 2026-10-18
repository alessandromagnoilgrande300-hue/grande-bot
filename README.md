<div align="center">

# ⚡ ZEALBOT
### la documentazione che non doveva esistere (ma esiste)

[![il codice vivo](https://img.shields.io/badge/repo-zema--tech%2Fzealbot--discord-5865F2?style=for-the-badge&logo=github)](https://github.com/zema-tech/zealbot-discord)
[![dove abita la verità](https://img.shields.io/badge/docs-zema--tech.github.io-00D4FF?style=for-the-badge)](https://zema-tech.github.io/zealbot-discord/)

**non è un bot.**  
è un organismo.  
~85 comandi che respirano.  
Un cervello chiamato **Commander**.  
Un sistema immunitario chiamato **Guardian**.  
Una dashboard che ti guarda mentre tu guardi lei.

</div>

---

## cos'è questa cosa?

ZealBot è quello che succede quando uno studente (zema-tech) decide che i bot Discord normali sono troppo... normali.

Non crasha quando un modulo muore.  
Non piange quando un server gli chiede troppe cose.  
Ha un'AI che puoi collegare con una sola chiave.  
Ha ticket che sembrano presi da un helpdesk serio.  
Ha un'economia, dei livelli, della moderazione che non fa ridere.

È self-hostable.  
È MIT.  
È vivo.

---

## perché dovresti usarlo (o almeno guardarlo)

| pezzo | cosa fa davvero |
|-------|-----------------|
| **Commander** | il cervello. tutto passa da qui. un modulo muore? gli altri continuano a respirare. |
| **Guardian** | il sistema immunitario. tiene il punteggio. mette in quarantena. guarisce. |
| **AI** | una chiave. tanti provider. il bot diventa intelligente senza diventare un mostro. |
| **Ticket** | claim, transcript, priorità, SLA, rating. tipo un vero supporto, ma dentro Discord. |
| **Moderazione** | warn che scalano. lockdown con memoria. casi che non spariscono. |
| **Dashboard** | OAuth2. griglia di server. moduli che si accendono e si spengono come interruttori. |

---

## come si fa a farlo vivere

```bash
git clone https://github.com/zema-tech/zealbot-discord.git
cd zealbot-discord
npm install
cp .env.example .env          # qui ci metti il sangue (TOKEN + CLIENT_ID)
node deploy-commands.js       # i comandi nascono
npm start                     # e poi respirano
```

```bash
npm test                      # verifica che non sia un fantasma
npm run dashboard             # la dashboard si sveglia
```

---

## le mappe di questo posto

| documento | cosa contiene |
|-----------|---------------|
| [**HOSTING**](docs/HOSTING.md) | dove farlo vivere (Docker, VPS, nuvole strane) |
| [**CONFIG**](docs/CONFIG.md) | le variabili che gli danno forma |
| [**COMMANDS**](docs/COMMANDS.md) | la lista quasi infinita di cose che sa fare |
| [**ARCHITECTURE**](docs/ARCHITECTURE.md) | come è costruito dentro (senza mentire) |

---

## le zone del regno

| zona | creature che ci abitano |
|------|-------------------------|
| **Moderazione** | ban, kick, timeout, warn, clear, lockdown, cases |
| **Economia** | balance, daily, bank, shop, lottery, rob, slots |
| **Livelli** | XP da chat e da voce, rank, leaderboard, ruoli-premio |
| **Ticket** | pannelli, claim, transcript, priorità, rating |
| **AI** | `/chiedi`, summarize, cervelli e skill per-server |
| **Utility** | welcome, automod, starboard, reaction roles, giveaway |
| **Musica** | `/musica` e tutto quello che ne consegue |

---

## cosa gli serve per esistere

- Node.js 22+ (meglio 24, più sangue fresco)
- Intent Discord: Guilds, GuildMessages, **Message Content**, **Server Members**, GuildModeration
- Un token. Un Client ID. Un po' di coraggio.

---

## se vuoi che continui a crescere

- metti una ⭐ sul [repo ufficiale](https://github.com/zema-tech/zealbot-discord)
- oppure [dai qualcosa](https://donate.stripe.com/test_aFa9AMegr8Me61bgAXcbC01)
- oppure apri un issue e digli cosa manca

---

<div align="center">

questa documentazione è ufficiale.  
scritta in un linguaggio che non dovrebbe esistere.  
ma esiste.  

curata da **Alessandro Magno il Grande**  
per conto (e con rispetto) di **zema-tech**

<br>

[il codice vero →](https://github.com/zema-tech/zealbot-discord)

</div>