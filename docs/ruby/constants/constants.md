---
title: Constants
---

### How to create constants? (kinda)
```rb
FRUIT = "orange"
```

- Anything that starts with uppercase is a constant in Ruby.
- They are constants because the first letter is uppercase.

```rb
Array
String
Hash
```
- A constant doesn’t require any special symbol or syntax to declare. You just need to make the first letter an uppercase letter.
- These are all valid constants:
```rb
ABC = 1
Goo = 2
Foo = 3
```

### Constants can change 🤷
- Constants are mutable in ruby.
- **Constants can changes 🤷**... but you will get an warning:
```rb
[1] pry(main)> COUNT = 2
=> 2
[2] pry(main)> COUNT = 3
(pry):2: warning: already initialized constant COUNT
(pry):1: warning: previous definition of COUNT was here
=> 3
[3] pry(main)> COUNT
=> 3
[4] pry(main)>
```

- There is no way to prevent a constants from changing 😱
- Because variables in Ruby are not containers, they are simply pointers to objects. Or labels, if you prefer.

### Can't defined constants inside a method:
```rb
[4] pry(main)> def my_method
[4] pry(main)*   COUNT = 2
[4] pry(main)* end
(eval):3: dynamic constant assignment
  COUNT = 2
  ^~~~~
[4] pry(main)> my_method
NameError: undefined local variable or method `my_method' for main:Object
Did you mean?  method
from (pry):4:in `__pry__'
```

### Class assigned to a constant
- When you define a class, what you’re really doing is creating a Class object, which is assigned to a constant.
- The constant becomes the class name.
- No real constants in Ruby. 🤦

### Solution? use freeze? Maybe

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