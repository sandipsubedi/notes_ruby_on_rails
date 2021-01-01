---
title: Object
---

TODO

- Everything in Ruby is an object—even methods, classes, and booleans
- In Ruby, everything is an object.
- Every bit of information and code can be given their own properties and actions.

```ruby
5.times { print "We *love* Ruby -- it's outrageous!" }
```
- In many languages, numbers and other primitive types are not objects.
- Ruby follows the influence of the Smalltalk language by giving methods and instance variables to all of its types.
- This eases one’s use of Ruby, since rules applying to objects apply to all of Ruby.


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