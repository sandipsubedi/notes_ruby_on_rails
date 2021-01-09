---
title: Custom Sort
---

### Sorting an array of integers:
```rb
nums = [4,3,1,1,2,3,2]
nums.sort!{ |a,b| a <=> b }
p nums

# Output:
[1, 1, 2, 2, 3, 3, 4]
```

### Sorting 2D array with begin value:
```rb
nums = [[8,10],[2,6],[1,3],[15,18]]
nums.sort!{ |a,b| a.first <=> b.first }
p nums

# Output:
[[1, 3], [2, 6], [8, 10], [15, 18]]
```

### Check
- Spaceship operators