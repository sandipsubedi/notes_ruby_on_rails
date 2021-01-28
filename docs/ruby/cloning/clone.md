---
title: Clone
---

- Shallow Copy

### Clone works for 1D Array:
```rb
[44] pry(main)> a = [1,2,3]
=> [1, 2, 3]
[46] pry(main)> b = a.clone
=> [1, 2, 3]
[47] pry(main)> a << 4
=> [1, 2, 3, 4]
[48] pry(main)> a
=> [1, 2, 3, 4]
[49] pry(main)> b
=> [1, 2, 3]
```

### Clone also fails in 2D array:

```rb
[37] pry(main)> a
=> [[1, 2, 3], [4, 5, 6]]
[38] pry(main)> b
=> [[1, 2, 3], [4, 5, 6]]
[39] pry(main)> a = [[1,2,3], [4,5]]
=> [[1, 2, 3], [4, 5]]
[40] pry(main)> b = a.clone
=> [[1, 2, 3], [4, 5]]
[41] pry(main)> a[1] << 6
=> [4, 5, 6]
[42] pry(main)> a
=> [[1, 2, 3], [4, 5, 6]]
[43] pry(main)> b
=> [[1, 2, 3], [4, 5, 6]]
```
