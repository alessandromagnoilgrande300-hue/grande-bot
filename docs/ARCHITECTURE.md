# come è fatto dentro (senza bugie)

ZealBot non è un blocco di codice che spera di non rompersi.  
È un organismo con cervello e sistema immunitario.

---

## lo schema (semplice, ma vero)

```text
        Dashboard / Discord / MCP
                    │
                    ▼
            ┌───────────────┐
            │   COMMANDER   │  ← il cervello
            │  + Guardian   │  ← il sistema immunitario
            └───────────────┘
                    │
     ┌─────────────┼─────────────┐
     ▼              ▼              ▼
  moduli        dashboard        events
```

---

## i pezzi che contano

### Commander

il cervello.  
tutto passa da qui.  
ogni server può accendere o spegnere i moduli.  
se un pezzo muore, gli altri non muoiono con lui.

### Guardian

il sistema immunitario.  
tiene il punteggio di successi e fallimenti.  
mette in quarantena.  
prova a far tornare le cose normali.

### i moduli

ogni funzionalità è un pezzo separato.  
moderazione, economia, ticket, AI…  
non si chiamano tra loro.  
parlano solo con il Commander.

---

## perché è fatto così

perché un bug non deve far crollare tutto.  
perché aggiungere cose nuove non deve essere una guerra.  
perché ogni server può essere diverso.  
perché multi-server senza diventare un mostro.

---

la versione lunga e tecnica (quella che non usa metafore) sta qui:  
→ [docs/it/ARCHITECTURE.md](https://github.com/zema-tech/zealbot-discord/blob/main/docs/it/ARCHITECTURE.md)