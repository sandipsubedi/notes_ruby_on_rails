---
title: Attr Writer
---

- attr_writer

```rb
class Person
  attr_reader :name, :age, :sex, :email
  attr_writer :name, :age, :sex, :email

  def initialize(name)
    @name = name
  end
end
```