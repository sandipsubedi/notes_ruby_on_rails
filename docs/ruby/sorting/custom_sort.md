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
nums = [[8,10],[2,6],[1,3],[15,18], [0,0]]

nums.sort!{ |a,b| a.first <=> b.first }
p nums

# Output:
[[0, 0], [1, 3], [2, 6], [8, 10], [15, 18]]
```

### Sorting 2D array with `.sort` method:
```rb
[57] pry(main)> nums = [[8,10],[2,6],[1,3],[15,18], [0,0]]
=> [[8, 10], [2, 6], [1, 3], [15, 18], [0, 0]]

[58] pry(main)> nums.sort!
=> [[0, 0], [1, 3], [2, 6], [8, 10], [15, 18]]

# When first values are same
[59] pry(main)> nums = [[8,10],[8,6],[1,3],[15,18], [0,0]]
=> [[8, 10], [8, 6], [1, 3], [15, 18], [0, 0]]

[60] pry(main)> nums.sort!
=> [[0, 0], [1, 3], [8, 6], [8, 10], [15, 18]]

# When first 3 values are same.
[61] pry(main)> nums = [[8,6,10],[8,6,11],[1,3],[15,18], [0,0]]
=> [[8, 6, 10], [8, 6, 11], [1, 3], [15, 18], [0, 0]]

[62] pry(main)> nums.sort!
=> [[0, 0], [1, 3], [8, 6, 10], [8, 6, 11], [15, 18]]
```

### Check
- Spaceship operators
