---
title: Sum of Numbers
---

### Using `.inject(:+)`
```rb
[18] pry(main)> nums
=> [1, 2, 3, 4, 5]
[19] pry(main)> nums.inject(:+)
=> 15
```

### Using `.sum`
```rb
[20] pry(main)> nums
=> [1, 2, 3, 4, 5]
[21] pry(main)> nums.sum
=> 15
```


### Check
- Reduce and Inject (Aliases)