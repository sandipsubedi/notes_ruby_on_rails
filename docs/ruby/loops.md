# Loops in Ruby:

### Each:

```ruby
numbers.each { |n| puts n }
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

### Times:
```ruby
10.times { |i| puts "hello #{i}" }
```

### Range
```ruby
(1..10).each { |i| puts i }
```

### While:
```ruby
n = 0
while n < 10
  puts n
  n += 1
end
```

### Stop a Loop?
```ruby
break
```