# 🚀 Installazione & Hosting — ZealBot

Guida semplificata in italiano basata sulla documentazione ufficiale di [zema-tech/zealbot-discord](https://github.com/zema-tech/zealbot-discord).

---

## Requisiti

- **Node.js ≥ 22.12** (consigliato **Node 24**)
- File `.env` con almeno `DISCORD_TOKEN` e `CLIENT_ID`
- Deploy dei comandi: `npm run deploy`

---

## Avvio rapido (locale / VPS)

```bash
git clone https://github.com/zema-tech/zealbot-discord.git
cd zealbot-discord
npm install
cp .env.example .env          # compila DISCORD_TOKEN + CLIENT_ID
npm run deploy                # registra gli slash command
npm start                     # avvia il bot
```

Dashboard (opzionale):

```bash
npm run dashboard
```

---

## Docker

```bash
cp .env.example .env
docker compose up -d --build
```

Immagine precompilata:

```bash
docker pull ghcr.io/zema-tech/zealbot-discord:latest
```

---

## Altri host supportati

| Host | Note |
|------|------|
| **VPS (Ubuntu/Debian)** | systemd o PM2 |
| **Fly.io** | `fly launch` + secrets |
| **Render / Railway** | Blueprint / Volume per i dati |
| **Pterodactyl** | Egg NodeJS generico |
| **Termux** | Per sviluppo su Android |

---

## Persistenza dati

- Default: `DB_BACKEND=json`
- Consigliato in produzione / Docker: `DB_BACKEND=sqlite` + volume su `data/`

---

## Troubleshooting veloce

| Problema | Soluzione |
|----------|-----------|
| Bot online ma non risponde | Abilita **Message Content** e **Server Members** Intent |
| Comandi mancanti | Esegui `npm run deploy` |
| Token invalid | Controlla `DISCORD_TOKEN` nel `.env` |
| Dati azzerati dopo deploy | Usa volume persistente + SQLite |

---

Documentazione ufficiale completa:  
→ [docs/it/HOSTING.md](https://github.com/zema-tech/zealbot-discord/blob/main/docs/it/HOSTING.md)