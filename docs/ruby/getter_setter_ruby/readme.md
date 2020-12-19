---
id: doc3
title: This is Document Number 3
---

# Getter/Setter in Ruby? attr_accessor, atrr_reader and attr_writer:

- A Ruby object has its methods public by default, but its data is private.
- So if you need to access the data, for either reading or writing, you need to make it public somehow.

Great article: https://mixandgo.com/learn/ruby_attr_accessor_attr_reader_attr_writer

```ruby
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

```ruby
john = Person.new(name: "John")
puts john.name # => John
```

equivalent
```ruby
class Person
  attr_reader :name

  def initialize(name:)
    @name = name
  end
end
```

```ruby
john = Person.new(name: "John")
puts john.name
```