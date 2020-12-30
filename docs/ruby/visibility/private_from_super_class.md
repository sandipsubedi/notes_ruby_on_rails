---
title: Private from Super class
---


```rb
class Animal
    private

    def eat
        p "I eat."
    end
end

class Tiger < Animal
end


tiger = Tiger.new
tiger.eat

# Output:
$ruby main.rb
main.rb:13:in `<main>': private method `eat' called for #<Tiger:0x0055b4308426e8> (NoMethodError)
```