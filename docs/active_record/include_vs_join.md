---
title: Include vs Join
---

TODO : add examples

### Joins
- Joins will just join the tables and brings selected fields in return.
- If you call associations on joins query result, it will fire database queries again.


### Includes
- Inlcudes will eager load the included associations and add them in memory.
- It loads all the included tables attributes.
- If you call associations on include query result, it will not fire any queries.