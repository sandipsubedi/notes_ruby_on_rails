# Hash Syntax: Hashrocket vs JSON-Style

Great article: http://alwayscoding.ca/momentos/2012/06/15/ruby-hash-syntax-hashrocket-vs-json-style/

TODO :  Learn more about these different syntax.

### Different ways to access items:
```ruby
temp = { first_message: "this is a message", "second_message" => "this is a second message",
         "third_message": "this is third message", :fourth_message => "this is a fourth message"}

2.6.3 :024 > temp[:first_message]
 => "this is a message"
 2.6.3 :023 > temp["second_message"]
 => "this is a second message"
2.6.3 :022 > temp[:third_message]
 => "this is third message"
 2.6.3 :028 > temp[:fourth_message]
 => "this is a fourth message"
```