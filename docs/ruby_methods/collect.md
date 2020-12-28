---
title: Collect
---

```rb

### Collect and Map are same:

[10] pry(main)> [1,2,3,4,5,6,7,8].collect { |num| num > 2 }
=> [false, false, true, true, true, true, true, true]

[11] pry(main)> [1,2,3,4,5,6,7,8].collect { |num| num*2 }
=> [2, 4, 6, 8, 10, 12, 14, 16]

[13] pry(main)> [1,2,3,4,5,6,7,8].map { |num| num > 2 }
=> [false, false, true, true, true, true, true, true]

[12] pry(main)> [1,2,3,4,5,6,7,8].map { |num| num*2 }
=> [2, 4, 6, 8, 10, 12, 14, 16]

### Select and find_all are same:
[14] pry(main)> [1,2,3,4,5,6,7,8].select { |num| num > 2 }
=> [3, 4, 5, 6, 7, 8]

[15] pry(main)> [1,2,3,4,5,6,7,8].select { |num| num*2 }
=> [1, 2, 3, 4, 5, 6, 7, 8]

[23] pry(main)> [1,2,3,4,5,6,7,8].find_all { |num| num > 2 }
=> [3, 4, 5, 6, 7, 8]
[24] pry(main)> [1,2,3,4,5,6,7,8].find_all { |num| num *2 }
=> [1, 2, 3, 4, 5, 6, 7, 8]

### Each also doesn't collect the result
[16] pry(main)> [1,2,3,4,5,6,7,8].each { |num| num > 2 }
=> [1, 2, 3, 4, 5, 6, 7, 8]
[17] pry(main)> [1,2,3,4,5,6,7,8].each { |num| num*2 }
=> [1, 2, 3, 4, 5, 6, 7, 8]
```

### Check:
- Any ruby objects can be evaluated as boolean