---
title: Attr Reader
---

- An attr_reader is a shortcut for writing an accessor method like this one:


```rb
def author
  @author
end
```

### Example:

```rb
class Person
  attr_reader :name, :age, :sex, :email

  def initialize(name:, age:, sex:, email:)
    @name = name
    @age = age
    @sex = sex
    @email = email
  end
end
```
