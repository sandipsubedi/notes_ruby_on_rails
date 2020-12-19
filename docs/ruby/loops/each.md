---
id: doc3
title: This is Document Number 3
---

# Ruby : Each

### Single line
```ruby
numbers.each { |n| puts n }
```

### Multi-line
```ruby
numbers.each do |n|
  print n
end
```

### Each with a hash:
```ruby
hash = { bacon: 300, coconut: 200 }
hash.each { |key,value| puts "#{key} price is #{value}" }
```

### Each with index:
```ruby
animals = ["cat", "dog", "tiger"]
animals.each_with_index { |animal, idx| puts "We have a #{animal} with index #{idx}" }
```