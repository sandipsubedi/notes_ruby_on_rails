---
title: Public from super class
---

```rb
class Animal
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
"I eat."
```