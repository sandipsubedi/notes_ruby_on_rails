---
title: Include vs Extend
---

- **Include** is for adding methods only to an **instance** of a class
  - instance methods. Without self.

- **Extend** is for adding methods to the **class** but not to its instance.
  - class methods. With self.

### Include - To the instance

```rb
module Animal
  def eat
    p "I eat"
  end
end

class Dog
  include Animal
  def bark
    p "I bark"
  end
end

dog = Dog.new
dog.eat

# Output:
$ruby main.rb
"I eat"
```

### Include can't use class methods:

```rb
module Animal
  def self.eat
    p "I eat"
  end
end

class Dog
  include Animal
  def bark
    p "I bark"
  end
end

dog = Dog.new
dog.eat

# Output:
$ruby main.rb
main.rb:15:in `<main>': undefined method `eat' for #<Dog:0x00556724be0bf0> (NoMethodError)
```

### Extend : Imports as class method:

```rb
module Animal
  def eat
    p "I eat"
  end
end

class Dog
  extend Animal
  def bark
    p "I bark"
  end
end

Dog.eat

# Output:
$ruby main.rb
"I eat"
```

### Extend: can't call class methods from Module:

```rb
module Animal
  def self.eat
    p "I eat"
  end
end

class Dog
  extend Animal
  def bark
    p "I bark"
  end
end

Dog.eat

# Output:
$ruby main.rb
main.rb:14:in `<main>': undefined method `eat' for Dog:Class (NoMethodError)
```
