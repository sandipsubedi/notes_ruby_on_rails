---
title: Private Constant
---

- If you want a constant to remain private, use private_consant

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