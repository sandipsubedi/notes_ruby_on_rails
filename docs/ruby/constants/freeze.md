---
title: Freeze
---

### Solution to problem of manipulating constant? use freeze? Maybe

```rb
[5] pry(main)> food = ["tacos", "apple", "sushi"].freeze
=> ["tacos", "apple", "sushi"]
[6] pry(main)> food << "pizza"
FrozenError: can't modify frozen Array
from (pry):10:in `__pry__'
```

- We can't modify a frozen object.
- BUT, we can change the whole object 

```rb
[7] pry(main)> food = ["pizza"]
=> ["pizza"]
[8] pry(main)> food
=> ["pizza"]
```

- AND, we can also String of those items:

```rb
[10] pry(main)> food.freeze
=> ["tacos", "apple", "sushi"]
[11] pry(main)> food << "pizza"
FrozenError: can't modify frozen Array
from (pry):15:in `__pry__'
[12] pry(main)> food[0] = 'pizza'
FrozenError: can't modify frozen Array
from (pry):16:in `__pry__'
[14] pry(main)> food[0][0] = 'N'
=> "N"
[15] pry(main)> food
=> ["Nacos", "apple", "sushi"]
```

### How can we make sure the Strings in the array are frozen too?
- We will need to make each of them frozen using a loop.

### Gem to check if String literals are Frozen:
https://github.com/schneems/let_it_go