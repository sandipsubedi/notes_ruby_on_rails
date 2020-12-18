# Length vs Size vs Count:

Great Article:
https://batsov.com/articles/2014/02/17/the-elements-of-style-in-ruby-number-13-length-vs-size-vs-count/

### .length
- Calculate length

### .size
- Alias of length


- Rule of thumb, don't use `.count` to get size/length when possible.
- `.count` usually meant to be used with a block or an argument and will return the number of matches in an Enumerable:

```ruby
arr = [1, 1, 2, 3, 5, 6, 8]

arr.count(&:even?) # => 3
arr.count(1) # => 2
```

### size vs length vs length() vs count
```ruby
[38] pry(main)> temp = [1,2,3]
=> [1, 2, 3]
[39] pry(main)> temp.size
=> 3
[40] pry(main)> temp.length
=> 3
[41] pry(main)> temp.length()
=> 3
[42] pry(main)> temp.count
=> 3
```
