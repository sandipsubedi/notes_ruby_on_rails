---
title: Resque
---

### Gem link:
https://github.com/resque/resque

### Clearing all the queues:
```ruby
Resque.queues.each{|q| Resque.redis.del "queue:#{q}" }
```