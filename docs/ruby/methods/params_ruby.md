---
title: Params Ruby
---

## Different types of parameter in Ruby:
### 1. Positional Params
```rb
def sum(salary, bonus, tax)
  salary + bonus - tax
end

sum(100, 10, 30) # => 80
```

### 2. Keyword Param
  - Introduced at Ruby 2.0.
  - Keyword arguments allow us to switch the order of the arguments, without affecting the behavior of the method.
  - Also known as named parameters, keyword arguments, required keyword arguments.

```rb
def sum(salary:, bonus:, tax:)
  salary + bonus - tax
end

sum(salary: 100, bonus: 10, tax: 30) # => 80
```

#### Passing default value:
```rb
def sum(salary:, bonus: 10, tax:)
  salary + bonus - tax
end

sum(salary: 100, tax: 30) # => 80
```

### 3. Variable Arguments:
```rb

def print_all(**args)
  print args
end
print_all(1, 2, 3) # => 
```
The **x is the same as variable arguments, but for keyword arguments. It will be a hash instead of an array.


### 4. Catch-all Argument:

```rb
def print_all(*)
end
```

This means that the method is accepting any arguments, but it’s not doing anything with them. It’s similar to using the underscore character (_) inside a block to show which arguments you aren’t using.

### Order

```rb
required -> optional -> variable -> keyword
```

```rb
def testing(a, b = 1, *c, d: 1, **x)
  p a,b,c,d,x
end
testing('a', 'b', 'c', 'd', 'e', d: 2, x: 1)
```

### Benefits of Keyword params:
- Order doesn't matter
- If order chagges on the method parameter, argument doesn't have to change on all the places where it's called.
- Usually, the code clarity and maintainability gained from keyword arguments outweigh the terseness offered by positional arguments. 


## Parameter vs Arguments:
**Argument:**
- The entity that we can pass to the method during the call is called an argument.

**Parameter:**
- The entity that we declare when we define a method is called a parameter.

When we pass arguments to a method, the method creates a local variable which has the same name

In ruby, arguments inside a method are passed by reference

## Interesting Facts:

### 1. Parentheses for paramters are optional:


```rb
def method_name a,b,c
  puts a,b,c,d 
end

method_name 0,1,2
```
But it's recommended for redeability.





