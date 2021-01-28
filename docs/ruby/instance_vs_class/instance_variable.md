---
title: Instance Variable
---

- Syntax: (@apple)
- To store shared data that all the methods(in the same class) can use.
- An instance variable is not visible outside the object it is in.
- But when you create an **attr_accessor**, it creates an instance variable and also makes it visible (and editable) outside the object

https://stackoverflow.com/questions/12924080/difference-between-instance-variable-and-attr-accessor

### Instance Variable not visible outside the object.
```rb
class Human
  def initialize
    @greeting = "hello"
  end
end

=> #<Human:0x00007faaf10ca730 @greeting="hello">
[3] pry(main)> human.greeting
NoMethodError: undefined method `greeting'
for #<Human:0x00007faaf10ca730 @greeting="hello">
from (pry):7:in `__pry__'
```

### Instance Variable with attr_accessor
```rb
class Human
  attr_accessor :greeting

  def initialize
    @greeting = "hello"
  end
end

m2 = Human.new
m2.greeting = "bonjour"
# <-- set the @greeting variable from outside the object

m2.greeting
#=> "bonjour"  didn't blow up as attr_accessor
# makes the variable accessible from outside the object
```
