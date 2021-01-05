---
title: Bang (!)
---

TODO

- Bang vs no bang.

- When the origional variable is manipulated, the method shout with a bang:

```rb
[79] pry(main)> arr = [4,1,7,3,6,11,2]
=> [4, 1, 7, 3, 6, 11, 2]
[80] pry(main)> arr.sort
=> [1, 2, 3, 4, 6, 7, 11]
[81] pry(main)> arr
=> [4, 1, 7, 3, 6, 11, 2]
[82] pry(main)> arr.sort!
=> [1, 2, 3, 4, 6, 7, 11]
[83] pry(main)> arr
=> [1, 2, 3, 4, 6, 7, 11]
```