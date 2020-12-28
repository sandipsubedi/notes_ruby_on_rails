---
title: Module
---

- Modules cannot be instantiated as classes.
- Create namespace and group things together.

```rb
module Animal
  def eat
    p "I eat food"
  end
end

animal = Animal.new

# Optput:
$ruby main.rb
main.rb:7:in `<main>': undefined method `new' for Animal:Module (NoMethodError)
```

### 2 main benefits of Modules
1. Grouping things together.
2. Makes mixins possible, thus removes the need for multiple inheritance.

- Modules are a way of grouping together methods, classes, and constants.
- Module constants are named just like class constants, with an initial uppercase letter.
- There are times when you want to group things together that don't naturally form a class. Use modules in those cases.