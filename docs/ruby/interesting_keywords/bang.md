---
title: Bang (!)
---

TODO

- Bang vs no bang.

:::tip
When the origional variable is manipulated, the method shout with a bang:
:::

### Sort no bang
```rb
[80] pry(main)> arr.sort
=> [1, 2, 3, 4, 6, 7, 11]
[81] pry(main)> arr
=> [4, 1, 7, 3, 6, 11, 2]
```

### Sort with bang: In place
```rb
[79] pry(main)> arr = [4,1,7,3,6,11,2]
=> [4, 1, 7, 3, 6, 11, 2]
[82] pry(main)> arr.sort!
=> [1, 2, 3, 4, 6, 7, 11]
[83] pry(main)> arr
=> [1, 2, 3, 4, 6, 7, 11]
```

### Bang on activerecord methods
- user.update vs user.update!
