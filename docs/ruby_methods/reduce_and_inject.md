---
title: Reduce
---

- The inject and reduce methods are aliases. There is no performance benefit to either.


### Sum an array:
```rb
[18] pry(main)> nums
=> [1, 2, 3, 4, 5]
[19] pry(main)> nums.inject(:+)
=> 15
```

TODO