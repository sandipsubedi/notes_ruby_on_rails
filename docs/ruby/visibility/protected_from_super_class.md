---
title: Protected from super class
---

- They can only be called if the receiver is self or of the same class hierarchy as self

### Protected method using self:
```rb
class Animal
  def call
    self.eat
  end
  
  protected
  
  def eat
    p "I eat."
  end
end

animal = Animal.new
animal.call

# Output:
"I eat."
```

### Protected method without using self errors out:
```rb
class Animal

  def call
    eat
  end
  
  protected
  
  def eat
    p "I eat."
  end
end

animal = Animal.new
animal.call

# Output:
main.rb:4:in `call': private method `eat' called for #<Animal:0x00000000cca8a8> (NoMethodError) from main.rb:15:in `<main>'
```

### Private method using self errors out:
```rb
class Animal

  def call
    self.eat
  end
  
  private
  
  def eat
    p "I eat."
  end
end

animal = Animal.new
animal.call

# Output:
main.rb:4:in `call': private method `eat' called for #<Animal:0x00000000cca8a8> (NoMethodError) from main.rb:15:in `<main>'
```


### Protected from superclass cannot be called.

```rb
class Animal
  protected

  def eat
    p "I eat."
  end
end

class Tiger < Animal
end


tiger = Tiger.new
tiger.eat

# Output:
# $ruby main.rb
# main.rb:13:in '<main>': 
# protected method 'eat' called for #<Tiger:0x005596dc122550> (NoMethodError)
```

### Protected from same class cannot be called.

```rb
class Animal
  protected

  def eat
    p "I eat."
  end
end

animal = Animal.new
animal.eat

# Output:

# main.rb:10:in `<main>': protected method `eat' called for #<Animal:0x000000023739b0> (NoMethodError)                                                          

```