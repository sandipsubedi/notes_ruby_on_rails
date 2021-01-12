---
title: Float
---

TODO

- Ruby will consider any number written without decimals as an integer.
- And, any number written with decimals as a float.

### Divide and store as float:

```rb
[88] pry(main)> 3/2.to_f
=> 1.5

# By default it returns int:
[148] pry(main)> 3/2
=> 1

# Even when the variable was instantiated as float before:
[149] pry(main)> temp = 0.0
=> 0.0

[150] pry(main)> temp = 3/2
=> 1

[151] pry(main)> temp
=> 1
```

### Convert to float:

```rb
[89] pry(main)> 2.to_f
=> 2.0
```