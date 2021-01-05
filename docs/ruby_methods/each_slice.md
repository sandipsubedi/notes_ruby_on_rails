---
title: Each Slice
---

- splits ruby array into n equally sized parts

```rb
a = [1,2,3,4,5,6,7]
[78] pry(main)> a.each_slice(2).to_a
=> [[1, 2], [3, 4], [5, 6], [7]]
```