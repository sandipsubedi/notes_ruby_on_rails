---
title: Map vs Collect vs Each
---

TODO

### map vs map!
```rb
[142] pry(main)> nums = [2, 3, 4, 5, 6]
=> [2, 3, 4, 5, 6]
[143] pry(main)> nums.map { |num| num*2 }
=> [4, 6, 8, 10, 12]
[144] pry(main)> nums
=> [2, 3, 4, 5, 6]

# Map! manipulates origional array
[142] pry(main)> nums
=> [2, 3, 4, 5, 6]
[145] pry(main)> nums.map! { |num| num*2 }
=> [4, 6, 8, 10, 12]
[146] pry(main)> nums
=> [4, 6, 8, 10, 12]
```
