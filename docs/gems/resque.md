---
title: Resque
---

### Gem link:
https://github.com/resque/resque

### Clearing all the queues:
```rb
Resque.queues.each{|q| Resque.redis.del "queue:#{q}" }
```

## Unregister worker:


#### Get list of workers:
```rb
Resque.workers
```

### Unregister worker
```rb
worker.unregister_worker
```
