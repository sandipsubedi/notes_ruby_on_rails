---
title: Object
---

TODO

- Everything in Ruby is an object—even methods, classes, and booleans


### Class is a object:

```rb
[99] pry(main)> class Animal
[99] pry(main)* end
=> nil
[100] pry(main)> Animal.is_a? Object
=> true
[101] pry(main)> Animal.ancestors
=> [Animal, Object, PP::ObjectMixin, Kernel, BasicObject]
```