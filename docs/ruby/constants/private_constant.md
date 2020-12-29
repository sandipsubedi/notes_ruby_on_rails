---
title: Private Constant
---

### Regular Constant

```rb
class Animal
    FOOD = ["grass", "meat"].freeze
end

p Animal.constants

# Output:
$ruby main.rb
[:FOOD]
```

### Private Constant

```rb
class Animal
    FOOD = ["grass", "meat"].freeze
    private_constant :FOOD
end

p Animal.constants

### Output:
$ruby main.rb
[]
```