---
title: Sort
---

- Array must have same datastructures to sort.

### Same DataStructure ✅
```rb
[57] pry(main)> [4,2,5,1,0].sort
=> [0, 1, 2, 4, 5]
```

### Different DataStructure ❌
```rb
[58] pry(main)> [4,2,5,"1",0].sort
ArgumentError: comparison of Integer with String failed
from (pry):69:in `sort'
```

### Comparator in Ruby:
- TODO