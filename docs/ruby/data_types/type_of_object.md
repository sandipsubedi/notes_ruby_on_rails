---
title: Type of Object
---

### class
1. `object.class`
```rb
[1] pry(main)> "test".class
=> String
[2] pry(main)> [1,2,3].class
=> Array
[3] pry(main)> nil.class
=> NilClass
[4] pry(main)> 1.2.class
=> Float
```

### is_a?

```rb
[6] pry(main)> "test".is_a? String
=> true
[7] pry(main)> [1,2,3].is_a? Array
=> true
[8] pry(main)> nil.is_a? NilClass
=> true
[10] pry(main)> 1.2.is_a? Float
=> true
```

### respond_to?

```rb
[12] pry(main)> "test".respond_to?(:to_s)
=> true
[13] pry(main)> "test".respond_to?(:to_a)
=> false
[14] pry(main)> [1,2,3].respond_to?(:to_a)
=> true
[17] pry(main)> 1.2.respond_to?(:to_f)
=> true
[18] pry(main)> 1.respond_to?(:to_f)
=> true
```

### instance_of?

```rb
[6] pry(main)> "test".instance_of? String
=> true
[7] pry(main)> [1,2,3].instance_of? Array
=> true
[8] pry(main)> nil.instance_of? NilClass
=> true
[10] pry(main)> 1.2.instance_of? Float
=> true
[24] pry(main)> 1.instance_of? Float
=> false
[25] pry(main)> 1.instance_of? Integer
=> true
```


### Ancestors:

```rb
pry(main)> 1.class.ancestors
=> [Integer, Numeric, Comparable, Object, PP::ObjectMixin, Kernel, BasicObject]
```