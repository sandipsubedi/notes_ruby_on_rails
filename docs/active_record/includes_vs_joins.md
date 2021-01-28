---
title: Includes vs Joins
---

TODO : add examples

### Joins
- **Mnemonic: Join vs Joins** What does it do? It Joins
- Joins will just join the tables and brings selected fields in return.
- If you call associations on joins query result, it will fire database queries again.


### Includes
- **Mnemonic: Include vs Includes** What does it do? It Includes
- Inlcudes will eager load the included associations and add them in memory.
- It loads all the included tables attributes.
- If you call associations on include query result, it will not fire any queries.