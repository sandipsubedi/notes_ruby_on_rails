---
title: Inheritance
---

- Ruby doesn't support multiple inheritance.
- But you can accomplish this with mixins.
- But can do `include` and `extend`.

### Sub-class/Superclass:
```rb
class Animal
  def eat
      puts "I eat food."
  end
end

class Bird < Animal
  def fly
    puts "I am a bird. And I can fly."
  end
  
  def eat
    puts "I love tacos."
    super # calls super method here
  end
end

bird = Bird.new
bird.eat
bird.fly

# output
$ruby main.rb
I love tacos.
I eat food.
I am a bird. And I can fly.
```