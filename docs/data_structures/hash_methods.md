---
title: Hash Methods
---

### Add a record:
```rb
[116] pry(main)> map = {}
=> {}

[117] pry(main)> map['first'] = 1
=> 1

[118] pry(main)> map
=> {"first"=>1}
```

### Get a record:
```rb
[120] pry(main)> map['first']
=> 1
```

### Check if contains key
```rb
[109] pry(main)> temp
=> {:third_message=>"this is third message", :fourth_message=>"this is a fourth message"}

[110] pry(main)> temp.has_key?(:second_message)
=> false

[111] pry(main)> temp.has_key?(:third_message)
=> true
```

### Delete a record:
```rb
[102] pry(main)> temp
=> {:first_message=>"this is a message",
 :third_message=>"this is third message",
 :fourth_message=>"this is a fourth message"}

[103] pry(main)> temp.delete(:first_message)
=> "this is a message"

[104] pry(main)> temp
=> {:third_message=>"this is third message", :fourth_message=>"this is a fourth message"}
```

### Delete all records
```rb
temp.clear
```

### Get the length
```rb
temp.length
```

### Access keys:
```rb
[100] pry(main)> temp.keys
=> [:first_message, :third_message, :fourth_message]
```

### Access values:
```rb
[101] pry(main)> temp.values
=> ["this is a message", "this is third message", "this is a fourth message"]
```

### Resources:
- https://www.shortcutfoo.com/app/dojos/ruby-hashes/cheatsheet

### Related leetcode problem:
- https://leetcode.com/problems/two-sum/
