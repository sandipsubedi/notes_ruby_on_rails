# By Value or By Reference:


## Methods:
- In ruby, arguments inside a method are passed by reference
- In ruby, we have a different situation, the variable that we have inside the method stores a reference to an object.
- Thus, if we will change an object inside the method, then it will be changed also outside the method.

Code

```ruby
def test_reference(test_hash:)
    test_hash[:test] = "was changed inside"
end

outside_hash = { test: "came from the outside" }
print "before: #{outside_hash} \n"

test_reference(test_hash: outside_hash)

print "after: #{outside_hash} \n"

```

Output
```
$ruby main.rb
before: {:test=>"came from the outside"} 
after: {:test=>"was changed inside"} 
```


