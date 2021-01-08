---
title: Duck Typing
---

- Ruby is a dynamically typed langage.
- Typing is defined at the runtime.

### Duck Test:
If it walks like a duck and it quacks like a duck, then it must be a duck.

```rb
# Ouput:
[10] pry(main)> nums = [1, 2, 3, 4, 5 ]
=> [1, 2, 3, 4, 5]
[11] pry(main)> nums.map{|num| num*num}
=> [1, 4, 9, 16, 25]
```

- Here the a variable responds to map and returns the expected object.
- So it's valid to think that the variable is an Array.

### Ruby will determine the type for us
```rb
# String
[12] pry(main)> name = "John"
[13] pry(main)> name.class
=> String

# Integer
[14] pry(main)> num = 1
[15] pry(main)> num.class
=> Integer

# Float
[16] pry(main)> num = 1.1
[17] pry(main)> num.class
=> Float
```


### Check:
- /typed

### Resources:
Good Article: https://medium.com/rubycademy/why-ruby-community-encourages-duck-typing-2e5fb529fca1
