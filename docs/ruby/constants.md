---
title: Constants
---

### How to create constants? (kinda)
```ruby
FRUIT = "orange"
```

- Anything that starts with uppercase is a constant in Ruby.
- They are constants because the first letter is uppercase.

```ruby
Array
String
Hash
```
- A constant doesn’t require any special symbol or syntax to declare. You just need to make the first letter an uppercase letter.
- These are all valid constants:
```ruby
ABC = 1
Goo = 2
Foo = 3
```

### Constans can change 🤷
- **Constants can changes 🤷**... but you will get an warning:
```ruby
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
```ruby
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

