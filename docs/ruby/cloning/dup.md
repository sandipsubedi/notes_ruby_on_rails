---
title: Dup
---

- Shallow Copy

### Dup: Clones the 1D array: Kinda

```rb
[29] pry(main)> a = [1,2,3]
=> [1, 2, 3]
[30] pry(main)> b = a.dup
=> [1, 2, 3]
[31] pry(main)> a << 4
=> [1, 2, 3, 4]
[32] pry(main)> a
=> [1, 2, 3, 4]
[33] pry(main)> b
=> [1, 2, 3]
```

### Dup: Fails in 2D Array

```rb
[34] pry(main)> a = [[1,2,3], [4,5]]
=> [[1, 2, 3], [4, 5]]
[35] pry(main)> b = a.dup
=> [[1, 2, 3], [4, 5]]
[36] pry(main)> a[1] << 6
=> [4, 5, 6]
[37] pry(main)> a
=> [[1, 2, 3], [4, 5, 6]]
[38] pry(main)> b
=> [[1, 2, 3], [4, 5, 6]]
```
