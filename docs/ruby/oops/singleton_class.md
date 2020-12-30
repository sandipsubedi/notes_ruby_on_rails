---
title: Singleton Class
---

TODO

- Singleton class and Singleton design pattern are different.


### Checking if a class is a singleton class:

```rb
[105] pry(main)> Animal.singleton_class?
=> false
[106] pry(main)> class Animal
[106] pry(main)* end
=> nil
[107] pry(main)> Animal.singleton_class?
=> false
```

### Resources:
Good article: https://devalot.com/articles/2008/09/ruby-singleton