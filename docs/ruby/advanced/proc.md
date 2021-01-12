---
title: Proc (Procdures)
---

- A Proc object is an encapsulation of a block of code, which can be stored in a local variable, passed to a method or another Proc, and can be called.

### Example 1

```rb
square = Proc.new {|x| x**2 }

square.call(3)  #=> 9
# shorthands:
square.(3)      #=> 9
square[3]       #=> 9
```

### Example 2

```rb
def gen_times(factor)
  Proc.new {|n| n*factor } # remembers the value of factor at the moment of creation
end

times3 = gen_times(3)
times5 = gen_times(5)

times3.call(12)               #=> 36
times5.call(5)                #=> 25
times3.call(times5.call(4))   #=> 60
```


### Procs with multiple params:

```rb
def test_method
  Proc.new do  |var_a, var_b|
    p "varA #{var_a}: varB: #{var_b}"
  end
end

temp = test_method

temp.call(1,2)

# Output:
$ruby main.rb
"varA 1: varB: 2"
```

### Procs doesn't throw an error when wrong numbers of variables are passed

```rb
def test_method
  Proc.new do  |var_a, var_b|
    p "varA #{var_a}: varB: #{var_b}"
  end
end

temp = test_method

temp.call(1)

# Output:
$ruby main.rb
"varA 1: varB: "
```

Resources:
- https://ruby-doc.org/core-2.6/Proc.html