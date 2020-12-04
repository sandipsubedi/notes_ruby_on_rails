# Getter/Setter in Ruby? attr_accessor, atrr_reader and attr_writer:

A Ruby object has its methods public by default, but its data is private.
So if you need to access the data, for either reading or writing, you need to make it public somehow.

Great article: https://mixandgo.com/learn/ruby_attr_accessor_attr_reader_attr_writer

```ruby
class Person
  def initialize(name)
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
john = Person.new("John")
puts john.name # => John
```

equivalent
```ruby
class Person
  attr_reader :name

  def initialize(name)
    @name = name
  end
end
```

```ruby
john = Person.new("John")
puts john.name
```

### Setter:
- attr_writer



## Getter and Setter:
- attr_accessor
- Basically attr_accessor is a shortcut for when you need both attr_reader and attr_writer. It squashes down those two lines into one. Like so.


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

## Getter:

There is nothing special about this, an attr_reader is a shortcut for writing an accessor method like this one:


```ruby
def author
  @author
end
```
