---
title: Send
---

- Send can also be used to actually call a private method.

### When a method is called in Ruby:
- A message containing the method’s name is sent to the object.
- If that method exists on the object, the object calls it.

### Calling send on the object
```rb
class Tiger
  def initialize(name:)
    @name = name
  end
  
  def return_tiger
    @name
  end
end

tiger = Tiger.new(name: "Jiba")

puts tiger.return_tiger
puts tiger.send("return_tiger")
```

Output:

```rb
$ruby main.rb
Jiba
Jiba
```

### Calling sending without the object

```rb
[4] pry(main)> def hello
[4] pry(main)*   p "hello world"
[4] pry(main)* end
=> :hello
# As a symbol
[5] pry(main)> send(:hello)
"hello world"
=> "hello world"

# As a string
[6] pry(main)> send("hello")
"hello world"
=> "hello world"
```

### Resources:
- https://medium.com/ruby-daily/53-ruby-on-rails-interview-questions-and-answers-eb99eed1aeb7