# Send in Ruby:

https://medium.com/ruby-daily/53-ruby-on-rails-interview-questions-and-answers-eb99eed1aeb7

- Send can also be used to actually call a private method.

When a method is called in Ruby:
- A message containing the method’s name is sent to the object. If that method exists on the object, the object calls it.

```ruby
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

```ruby
$ruby main.rb
Jiba
Jiba
```
