---
title: Include vs Join
---

### Joins
- Joins will just joins the tables and brings selected fields in return.
- If you call associations on joins query result, it will fire database queries again.


### Includes
- Inlcudes will eager load the included associations and add them in memory.
- it loads all the included tables attributes.
- If you call associations on include query result, it will not fire any queries.