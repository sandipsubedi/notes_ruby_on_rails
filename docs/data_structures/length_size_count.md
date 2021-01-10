---
title: Length vs Size vs Count
---

### .length
- Calculates length

### .size
- Alias of length

### .count

- Rule of thumb, don't use `.count` to get size/length when possible.
- `.count` usually meant to be used with a block or an argument and will return the number of matches in an Enumerable:

```rb
arr = [1, 1, 2, 3, 5, 6, 8]

arr.count(&:even?) # => 3
arr.count(1) # => 2
```

### size vs length vs length() vs count
```rb
[38] pry(main)> temp = [1,2,3]
=> [1, 2, 3]

[39] pry(main)> temp.size
=> 3

[40] pry(main)> temp.length
=> 3

# () is optional in Ruby
[41] pry(main)> temp.length()
=> 3

[42] pry(main)> temp.count
=> 3
```


### Resources:
- Great Article: https://batsov.com/articles/2014/02/17/the-elements-of-style-in-ruby-number-13-length-vs-size-vs-count/

- Count is slow on benchmark: https://github.com/JuanitoFatas/fast-ruby#arraylength-vs-arraysize-vs-arraycount-code

