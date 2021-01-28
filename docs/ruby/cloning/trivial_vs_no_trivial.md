---
title: Trivial vs No Trivial
---

### Change didn't affect on Trivial

```rb
[18] pry(main)> a =1
=> 1
[19] pry(main)> b = a
=> 1
[20] pry(main)> a += 1
=> 2
[21] pry(main)> a
=> 2
[22] pry(main)> b
=> 1
```

### Change affects on non-Trivial
```rb
[23] pry(main)> a = [1,2,3]
=> [1, 2, 3]
[24] pry(main)> b = a
=> [1, 2, 3]
[25] pry(main)> a << 4
=> [1, 2, 3, 4]
[27] pry(main)> print a
[1, 2, 3, 4]=> nil
[28] pry(main)> print b
[1, 2, 3, 4]=> nil
```
