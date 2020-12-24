---
title: Attr Writer
---

- attr_writer

```rb
class Person
  attr_reader :first_name, :last_name, :email
  attr_writer :first_name, :last_name, :email

  def initialize(first_name, last_name)
    @first_name = first_name
    @last_name = last_name
  end
end
```