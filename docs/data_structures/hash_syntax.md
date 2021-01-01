---
title: Hash
---

- Hashrocket vs JSON-Style

### Ways to create symbol key:
- This is more popular.

```rb
temp = { first_message: "this is a message",
         "third_message": "this is third message",
         :fourth_message => "this is a fourth message"}
```

- Access symbol keys:

```rb
2.6.3 :024 > temp[:first_message]
 => "this is a message"
2.6.3 :022 > temp[:third_message]
 => "this is third message"
 2.6.3 :028 > temp[:fourth_message]
 => "this is a fourth message"
```

### Ways to create string key:
```rb
temp = { "second_message" => "this is a second message" }
```

- Access String keys:

```rb
 2.6.3 :023 > temp["second_message"]
 => "this is a second message"
```

### Resources:
- Great article: http://alwayscoding.ca/momentos/2012/06/15/ruby-hash-syntax-hashrocket-vs-json-style/

- Symbol is faster than String: https://medium.com/@gorbikoff/ruby-hash-key-showdown-symbol-vs-string-c0655afbcfca
