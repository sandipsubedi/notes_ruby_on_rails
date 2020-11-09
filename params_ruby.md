# Params Ruby:

## Different types of parameter in Ruby:
1. Positional Params
```ruby
def total(subtotal, tax, discount)
  subtotal + tax - discount
end

total(100, 10, 5) # => 105
```

2. Keyword Param
  - Keyword arguments allow us to switch the order of the arguments, without affecting the behavior of the method:
  - Keyword Params appeared in Ruby 2.0
  - : Also called named parameters, keyword arguments, required keyword arguments.
```ruby
obvious_total(subtotal: 100, discount: 5, tax: 10) # => 105
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


```ruby
def method_name a,b,c
  puts a,b,c,d 
end

method_name 0,1,2
```
But it's recommended for redeability.





