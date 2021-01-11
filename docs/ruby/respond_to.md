---
title: Respond to
---


### Switch cases without respond to
```rb
class Deliver
  def initialize(message:, mediums:)
    @message = message
    @mediums = mediums
  end
  
  def call
    @mediums.each do |medium|
      case medium
      when "sms"
        deliver_sms
      when "email"
        deliver_email
      end
    end
  end
  
  def deliver_sms
    p "sms is delivered"
  end
  
  def deliver_email
    p "email is delivered"
  end
end

deliver = Deliver.new(message: "hello", mediums: ['sms', 'email'])
deliver.call

# Output:
$ruby main.rb
"sms is delivered"
"email is delivered"
```


### Dynamically call method with send and respond_to?

```rb
class Deliver
  def initialize(message:, mediums:)
    @message = message
    @mediums = mediums
  end
  
  def call
    @mediums.each do |medium|
      send("deliver_#{medium}") if self.respond_to?("deliver_#{medium}")
    end
  end
  
  def deliver_sms
    p "sms is delivered"
  end
  
  def deliver_email
    p "email is delivered"
  end
end

deliver = Deliver.new(message: "hello", mediums: ['sms', 'email'])
deliver.call
```