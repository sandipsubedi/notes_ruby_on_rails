---
title: Ways to call method
---

### 3 ways to call method in Ruby:


### 1. dot operator

### 2. Object#send

### 3. method(:foo).call

```rb
class Animal
  def initialize(way:)
    @way = way
  end

  def eat
    p @way + " I eat"
  end
end


Animal.new(way: "dot_operator").eat

Animal.new(way: "send").send("eat")
Animal.new(way: "send_symbol").send(:eat)

Animal.new(way: "method.call").method("eat").call
Animal.new(way: "method.call_symbol").method(:eat).call

# Output
"dot_operator I eat"

"send I eat"
"send_symbol I eat"

"method.call I eat"
"method.call_symbol I eat"
```
