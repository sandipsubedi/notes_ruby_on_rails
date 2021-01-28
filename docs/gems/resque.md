---
title: Resque
---

### Gem link:
https://github.com/resque/resque

### Clearing all the queues:
```rb
Resque.queues.each{|q| Resque.redis.del "queue:#{q}" }
```
