---
title: Instance Method
---

### Creating an object, and calling instance method
```rb
class Mail
  def self.send_message(message:)
    puts message
  end
    
  def second_send(message:)
    puts message
  end
end

mail = Mail.new
mail.second_send(message: "this is a test second message.")

# output:
$ruby main.rb
this is a test second message.
```

### Class method cannot be called via the object:
```rb
class Mail
    def self.send_message(message:)
        puts message
    end
    
    def second_send(message:)
        puts message
    end
    
end

mail = Mail.new
mail.send_message(message: "this is a test second message.")

# output:
$ruby main.rb
main.rb:13:in `<main>': undefined method `send_message' for #<Mail:0x0055c9ed73e008> (NoMethodError)
```