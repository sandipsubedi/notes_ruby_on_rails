---
title: By Value vs By Ref
---

### Methods:
- In ruby, arguments inside a method are passed by reference
- In ruby, we have a different situation, the variable that we have inside the method stores a reference to an object.
- Thus, if we will change an object inside the method, then it will be changed also outside the method.

### Code
```rb
def test_reference(test_hash:)
  test_hash[:test] = "was changed inside"
end

outside_hash = { test: "came from the outside" }
puts "before: #{outside_hash}"

test_reference(test_hash: outside_hash)

puts "after: #{outside_hash}"
```

### Output
```
$ruby main.rb
before: {:test=>"came from the outside"} 
after: {:test=>"was changed inside"} 
```


