---
title: Arrays Method
---

### Push something to the array
```rb
[70] pry(main)> nums = [1,2,3]
=> [1, 2, 3]
[71] pry(main)> nums.push(4)
=> [1, 2, 3, 4]
[72] pry(main)> nums.push 5
=> [1, 2, 3, 4, 5]
[73] pry(main)> nums << 6
=> [1, 2, 3, 4, 5, 6]
```

- But when you push an array, it stays as an array

```rb
[75] pry(main)> nums
=> [1, 2, 3, 4, 5, 6]
[76] pry(main)> nums << [7,8,9]
=> [1, 2, 3, 4, 5, 6, [7, 8, 9]]
```

- concat will solve that issue:

```rb
[77] pry(main)> nums = [1,2,3]
=> [1, 2, 3]
[78] pry(main)> nums.concat([4,5,6])
=> [1, 2, 3, 4, 5, 6]
```

### Flatten to flatten the array

```rb
[79] pry(main)> nums << [7,8]
=> [1, 2, 3, 4, 5, 6, [7, 8]]
[80] pry(main)> nums.flatten
=> [1, 2, 3, 4, 5, 6, 7, 8]
[81] pry(main)> nums
=> [1, 2, 3, 4, 5, 6, [7, 8]]
[82] pry(main)> nums.flatten
=> [1, 2, 3, 4, 5, 6, 7, 8]

# BANG!
[83] pry(main)> nums.flatten!
=> [1, 2, 3, 4, 5, 6, 7, 8]
[84] pry(main)> nums
=> [1, 2, 3, 4, 5, 6, 7, 8]
```

### Check
- Bang