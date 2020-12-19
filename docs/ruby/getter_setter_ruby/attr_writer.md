---
id: doc3
title: This is Document Number 3
---

### Setter:
- attr_writer

```ruby
class Person
  attr_reader :name, :age, :sex, :email
  attr_writer :name, :age, :sex, :email

  def initialize(name)
    @name = name
  end
end
```

to:
```ruby
class Person
  attr_accessor :name, :age, :sex, :email

  def initialize(name)
    @name = name
  end
end
```