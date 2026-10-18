# ⚙️ Configurazione — ZealBot

Variabili d'ambiente principali.

Documentazione ufficiale completa:  
→ [docs/it/CONFIG.md](https://github.com/zema-tech/zealbot-discord/blob/main/docs/it/CONFIG.md)

---

## Variabili obbligatorie

| Variabile | Scopo |
|-----------|-------|
| `DISCORD_TOKEN` | Token del bot |
| `CLIENT_ID` | ID applicazione (per i comandi slash) |

---

## Variabili importanti

| Variabile | Scopo |
|-----------|-------|
| `GUILD_ID` | (Opzionale) Limita i comandi a un solo server di test |
| `DB_BACKEND` | `json` (default) oppure `sqlite` |
| `DB_SQLITE_PATH` | Percorso del database SQLite |
| `CLIENT_SECRET` | Necessario per la Dashboard OAuth2 |
| `SESSION_SECRET` | Chiave sessione Dashboard (≥32 caratteri) |
| `BASE_URL` | URL pubblico della dashboard |

---

## AI (opzionale)

Puoi collegare uno o più provider:

- `GROQ_API_KEY`
- `GEMINI_API_KEY`
- `OPENAI_API_KEY`
- oppure altri supportati

---

Copia sempre da `.env.example` e **non** committare mai il file `.env`.