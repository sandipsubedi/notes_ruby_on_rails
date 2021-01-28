---
title: Any ruby objects can be evaluated as boolean
---

- Every Ruby expression evaluates to an object 
- and every Ruby object in turn can be used in a conditional statement
- which means every object ultimately must evaluate to a boolean value.

```rb
if 1*2
    p "hello 1*2"
end

if false 
    p "hello false"
end

if true
    p "hello true"
end

class Animal end;

if Animal.new
    p "hello animal"
end
```
