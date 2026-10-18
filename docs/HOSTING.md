# dove far vivere la creatura

ZealBot non chiede un trono.  
Chiede solo un posto dove non morire ogni volta che il server si riavvia.

---

## cosa gli serve per non collassare

- Node.js ≥ 22.12 (meglio 24, più ossigeno)
- un file `.env` con almeno `DISCORD_TOKEN` e `CLIENT_ID`
- il rito di nascita dei comandi: `npm run deploy`

---

## il modo più semplice (locale o VPS)

```bash
git clone https://github.com/zema-tech/zealbot-discord.git
cd zealbot-discord
npm install
cp .env.example .env          # qui ci metti il sangue
npm run deploy                # i comandi aprono gli occhi
npm start                     # e poi respirano
```

Se vuoi anche la dashboard (l'occhio che guarda):

```bash
npm run dashboard
```

---

## Docker (la gabbia elegante)

```bash
cp .env.example .env
docker compose up -d --build
```

Oppure prendi l'immagine già fatta:

```bash
docker pull ghcr.io/zema-tech/zealbot-discord:latest
```

---

## altri mondi possibili

| posto | come sopravvive |
|-------|-----------------|
| **VPS** | systemd o PM2 (scegli uno e non tradirlo) |
| **Fly.io** | `fly launch` + secrets |
| **Render / Railway** | blueprint + volume, altrimenti i dati evaporano |
| **Pterodactyl** | egg NodeJS generico |
| **Termux** | solo se stai giocando, non se stai facendo sul serio |

---

## la memoria (importante)

- di default usa `DB_BACKEND=json`
- in produzione o Docker: passa a `sqlite` e metti un volume su `data/`
- senza volume persistente, ogni deploy è un'amnesia

---

## quando qualcosa va storto

| sintomo | cosa probabilmente sta succedendo |
|---------|-----------------------------------|
| è online ma non risponde | gli Intent (Message Content + Server Members) sono spenti |
| i comandi non ci sono | non hai fatto `npm run deploy` |
| Token invalid | il sangue nel `.env` è sbagliato o vecchio |
| i dati spariscono | non c'è un volume. i fantasmi non tengono i soldi. |

---

la versione lunga e ufficiale (quella seria) sta qui:  
→ [docs/it/HOSTING.md](https://github.com/zema-tech/zealbot-discord/blob/main/docs/it/HOSTING.md)