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
  attr_reader :first_name, :last_name, :email

  def initialize(first_name:, last_name:, email:)
    @first_name = first_name
    @last_name = last_name
    @email = email
  end
end
```
