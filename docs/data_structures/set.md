---
title: Set
---

```rb
require 'set'

s = Set.new         # <Set: {}>
s.instance_of?(Set)
s.size # 2
```

### Items can have any datatype:
```rb
[25] pry(main)> set.add([4,5,6])
=> #<Set: {1, 2, [4, 5, 6]}>
[26] pry(main)> set.add("hello")
=> #<Set: {1, 2, [4, 5, 6], "hello"}>
```

### Add
```rb
[16] pry(main)> set = Set.new
=> #<Set: {}>
[17] pry(main)> set.add(1)
=> #<Set: {1}>
[18] pry(main)> set.add(2)
=> #<Set: {1, 2}>
[19] pry(main)> set.add(3)
=> #<Set: {1, 2, 3}>
```

### Delete
```rb
[22] pry(main)> set.add(3)
=> #<Set: {1, 2, 3}>
[23] pry(main)> set.delete(3)
=> #<Set: {1, 2}>
```

### Length
```rb
[24] pry(main)> set.length
=> 2
```

### Equivalent of `.contains()` in Java's HashSet:
```rb
 set.include?(1)
```

### Also see:
Sorted Set

### Resources:
- Set Documentation: https://ruby-doc.org/stdlib-2.7.2/libdoc/set/rdoc/Set.html