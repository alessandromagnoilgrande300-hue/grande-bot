# 🏗️ Architettura di ZealBot

ZealBot non è un bot "monolitico". Usa un'architettura pensata per essere **stabile e scalabile**.

---

## Schema semplificato

```text
        Dashboard / Discord / MCP
                    │
                    ▼
            ┌───────────────┐
            │   COMMANDER   │  ← cervello
            │  + Guardian   │  ← sistema immunitario
            └───────────────┘
                    │
     ┌─────────────┼─────────────┐
     ▼              ▼              ▼
  moduli        dashboard        events
```

---

## Componenti chiave

### Commander
- Punto di ingresso unico di tutti i comandi
- Toggle **on/off per ogni server**
- Isolamento: se un modulo crasha, gli altri continuano a funzionare

### Guardian
- Tiene traccia di successi / fallimenti / timeout
- Può mettere in quarantena moduli problematici
- Recovery automatico

### Moduli
- Ogni funzionalità (moderazione, economia, ticket, AI…) è un modulo indipendente
- I moduli **non** si chiamano tra loro direttamente

---

## Vantaggi

- Un bug in un modulo non fa crashare tutto il bot
- Facile aggiungere nuove feature
- Configurazione granulare per server
- Ideale per multi-server

---

Documentazione ufficiale più approfondita:  
→ [docs/it/ARCHITECTURE.md](https://github.com/zema-tech/zealbot-discord/blob/main/docs/it/ARCHITECTURE.md)