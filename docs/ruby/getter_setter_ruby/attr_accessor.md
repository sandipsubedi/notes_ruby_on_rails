# Attr Accessor : Ruby

```ruby
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

```ruby
$ruby main.rb
Freddie
```