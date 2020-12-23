---
title: Each
---

### Single line
```ruby
numbers = [1,2,3,4]
numbers.each { |n| puts n }
```

### Multi-line
```ruby
numbers = [1,2,3,4]
numbers.each do |n|
  print n
end
```

### Each with a hash:
```ruby
hash = { bacon: 300, coconut: 200 }
hash.each { |key,value| puts "#{key} price is #{value}" }
```

### Each with index: Single Line
```ruby
animals = ["cat", "dog", "tiger"]
animals.each_with_index { |animal, idx| puts "We have a #{animal} with index #{idx}" }
```

### Each with index: Multi Line
```ruby
animals = ["cat", "dog", "tiger"]
animals.each_with_index do |animal, idx|
  puts "We have a #{animal} with index #{idx}"
end

# output:
We have a cat with index 0
We have a dog with index 1
We have a tiger with index 2
=> ["cat", "dog", "tiger"]
```