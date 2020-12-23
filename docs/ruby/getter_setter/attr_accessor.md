---
title: Attr Accessor
---

- Getter + Setter = attr_accessor
- Basically attr_accessor is a shortcut for when you need both attr_reader and attr_writer.
- It squashes down those two lines into one.

```rb
class Animal
  attr_accessor :name
  def initialize(name:)
    self.name = name
  end
end

t = Animal.new(name: 'Freddie')
puts t.name 
```

Output:

```rb
$ruby main.rb
Freddie
```

### Squashing: From

```rb
class Person
  attr_reader :name, :age, :sex, :email
  attr_writer :name, :age, :sex, :email

  def initialize(name)
    @name = name
  end
end
```

### Suashing to:
```rb
class Person
  attr_accessor :name, :age, :sex, :email

  def initialize(name)
    @name = name
  end
end