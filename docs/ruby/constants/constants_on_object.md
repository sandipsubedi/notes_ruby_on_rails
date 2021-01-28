---
title: Constants on Object
---

```rb
class Animal
    FOOD = ["grass", "meat"]
end

p Animal.constants

# Output:
$ruby main.rb
[:FOOD]
```

### With some libraries:

```rb
[36] pry(main)> Integer.constants
=> []
[37] pry(main)> Float.constants
=> [:ROUNDS, :RADIX, :MANT_DIG, :DIG, :MIN_EXP, :MAX_EXP, :MIN_10_EXP, :MAX_10_EXP, :MIN, :MAX, :EPSILON, :INFINITY, :NAN]
```
