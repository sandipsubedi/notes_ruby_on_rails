---
title: Inherited
---


```rb
class SimpleBaseClass
    def self.inherited(new_subclass)
        puts "Hey #{new_subclass} is now a subclass of #{self}!"
    end
end

class ChildClassOne < SimpleBaseClass
end

# Output:
Hey ChildClassOne is now a subclass of SimpleBaseClass!
```

