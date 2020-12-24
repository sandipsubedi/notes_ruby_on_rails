---
title: Class Method
---

- Method that can be used without creating an instance of the class.
- meaning without creating an object.

### Class method can be called without creating an Object.
```rb
class Mail
  def self.send_message(message:)
    puts message
  end
end

Mail.send_message(message: "This is a test message.")

# output:
$ruby main.rb
This is a test message.
```

### Instance method cannot be called without creating an object.

```rb
class Mail
  def self.send_message(message:)
    puts message
  end
    
  def second_send(message:)
    puts message
  end
end

Mail.send_message(message: "This is a test message.")
Mail.second_send(message: "This is a test message to second send")

# Output:
$ruby main.rb
This is a test message.
main.rb:14:in `<main>': undefined method `second_send' for Mail:Class (NoMethodError)
```
