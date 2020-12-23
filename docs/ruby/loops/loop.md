---
title: Loop
---


### Regular:
```ruby
# both 0 and 2 are inclusive
for count in 0..2
   puts "Value of count is: #{count}"
end

# Output:
Value of count is: 0
Value of count is: 1
Value of count is: 2
```

### Times:
```ruby
10.times { |i| puts "hello #{i}" }
```

### Range
```ruby
(1..10).each { |i| puts i }
```

### Stop a Loop?
```ruby
break # java: break;
```

### Skip a loop?
```ruby
next # java: continue
```

### Redo?
- Restarts current iteration
- TODO

### Retry?
- TODO