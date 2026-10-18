# le variabili che gli danno forma

il file `.env` non è un dettaglio.  
è il sangue.

---

## le cose obbligatorie (senza queste non esiste)

| variabile | cosa fa |
|-----------|---------|
| `DISCORD_TOKEN` | il nome segreto del bot |
| `CLIENT_ID` | l'identità che Discord riconosce |

---

## le cose importanti

| variabile | cosa fa |
|-----------|---------|
| `GUILD_ID` | (opzionale) lo lega a un solo server di prova |
| `DB_BACKEND` | `json` (default) oppure `sqlite` |
| `DB_SQLITE_PATH` | dove vive la memoria se usi sqlite |
| `CLIENT_SECRET` | serve alla dashboard per l'OAuth2 |
| `SESSION_SECRET` | la chiave della sessione (≥32 caratteri, non scherzare) |
| `BASE_URL` | l'indirizzo pubblico della dashboard |

---

## l'AI (se vuoi che parli)

puoi dargli una o più chiavi:

- `GROQ_API_KEY`
- `GEMINI_API_KEY`
- `OPENAI_API_KEY`
- o altri provider supportati

una sola chiave basta per far partire il cervello.

---

copia sempre da `.env.example`.  
e **non** committare mai il file `.env`.  
i segreti devono restare segreti.

---

la lista completa e ufficiale:  
→ [docs/it/CONFIG.md](https://github.com/zema-tech/zealbot-discord/blob/main/docs/it/CONFIG.md)