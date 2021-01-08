---
title: Select
---

TODO
```rb
# Returns manipulated
[14] pry(main)> [1,2,3,4,5,6,7,8].select { |num| num > 2 }
=> [3, 4, 5, 6, 7, 8]

# Returns Origional because there is no conditional
[15] pry(main)> [1,2,3,4,5,6,7,8].select { |num| num*2 }
=> [1, 2, 3, 4, 5, 6, 7, 8]
```

### Select odd
```rb
[23] pry(main)> [1,2,3,4,5,6].select &:odd?
=> [1, 3, 5]
```

### Select even
```rb
[24] pry(main)> [1,2,3,4,5,6].select &:even?
=> [2, 4, 6]
```
