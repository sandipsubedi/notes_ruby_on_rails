---
title: Mixins
---

- mix-in-s
- A mixin can basically be thought of as a set of code that can be added to one or more classes to add additional capabilities without using inheritance
- Good article: https://www.sitepoint.com/ruby-mixins-2/ 

### Including multiple modules:
```rb
module Fly
  def fly_far
    puts "I can fly far."
  end
end

module Eat
  def eat_tacos
    puts "I eat tacos."
  end
end

class Bird
  include Fly
  include Eat
end

bird = Bird.new
bird.fly_far
bird.eat_tacos

# Output
$ruby main.rb
I can fly far.
I eat tacos.
```

### Can't include classes:

```rb
class Fly
  def fly_far
    puts "I can fly far."
  end
end

class Eat
  def eat_tacos
    puts "I eat tacos."
  end
end

class Bird
  include Fly
  include Eat
end

bird = Bird.new
bird.fly_far
bird.eat_tacos

# Output:
$ruby main.rb
main.rb:14:in `include': wrong argument type Class (expected Module) (TypeError)
	from main.rb:14:in `<class:Bird>'
	from main.rb:13:in `<main>'
```

### Check:
- include vs extend
