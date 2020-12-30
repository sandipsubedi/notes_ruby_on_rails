---
title: Protected from super class
---


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
$ruby main.rb
main.rb:13:in `<main>': protected method `eat' called for #<Tiger:0x005596dc122550> (NoMethodError)
```rb