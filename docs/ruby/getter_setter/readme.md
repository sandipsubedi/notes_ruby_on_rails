---
title: Getter and Setter
---

- A Ruby object has its methods public by default, but its data is private.
- So if you need to access the data, for either reading or writing, you need to make it public somehow.

```rb
class Person
  def initialize(name:)
    @name = name
  end

  # this is getter method equivalent in Java.
  # called attr_reader in ruby
  def name
    @name
  end
end
```

```rb
john = Person.new(name: "John")
puts john.name # => John
```

equivalent
```rb
class Person
  attr_reader :name

  def initialize(name:)
    @name = name
  end
end
```

```rb
john = Person.new(name: "John")
puts john.name
```

### Resources:
- https://mixandgo.com/learn/ruby_attr_accessor_attr_reader_attr_writer