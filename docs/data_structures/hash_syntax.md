---
title: Hash
---

- Hashrocket vs JSON-Style
- Hash key can be a string or a symbol.

- Using symbols as hash keys is preferred whenever possible.
- Every instance of a symbol points to the same object, whereas each instance of a string refers to a unique object.
- Using symbols as keys results in slightly better performance and less memory usage.

```rb
a = {} (or a = Hash.new)
a['one'] = 1 # a = {"one"=>1}
a['two'] = 2 # a = {"one"=>1, "two"=>2}
```

### Symbol Key:
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

### String Key:
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
- Hash: https://ruby-doc.org/core-2.7.2/Hash.html
