---
title: Private Class method
---

TODO

### Private Instance Method

- Private instance method is more popular

```rb
class Animal
    
  private
  
  def eat
    p "I eat"
  end
   
end

Animal.new.eat
# Output:
$ruby main.rb
main.rb:11:in `<main>': private method `eat' called for #<Animal:0x005636bc9bf3b8> (NoMethodError)
```
- This makes sense, because we are calling a private method, from outside the class.

### Private Class Method:

```rb
class Animal

    private
    
  def self.eat
    p "I eat"
  end
   
end

Animal.eat

# Output:
$ruby main.rb
"I eat"
```

- This doesn't make sense, because it was supposed to throw an error, right?

- `private_class_method` is what we are looking for here.

```rb
class Animal

  def self.eat
      p "I eat"
  end

  private_class_method :eat
end

Animal.eat

# Output:
$ruby main.rb
main.rb:13:in `<main>': private method `eat' called for Animal:Class (NoMethodError)
```

### Resources:
- https://jakeyesbeck.com/2016/01/24/ruby-private-class-methods/