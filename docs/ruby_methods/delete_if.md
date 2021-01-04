---
title: Delete If
---

TODO

- Deletes all items that meets the criteria on the block as true.
- And returns the filtered array.

```rb
[4] pry(main)> data = { "item1": 44, "item2": -22, "item3": 33 }
[5] pry(main)> filtered = data.delete_if { |key, val| val < 0 }
[6] pry(main)> p filtered
=> {:item1=>44, :item3=>33}
```