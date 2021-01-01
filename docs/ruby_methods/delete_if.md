---
title: Delete If
---

TODO

```rb
[4] pry(main)> data = { "item1": 44, "item2": -22, "item3": 33 }
[5] pry(main)> filtered = data.delete_if { |key, val| val < 0 }
[6] pry(main)> p filtered
=> {:item1=>44, :item3=>33}
```