---
title: Retriable
---

### Gem Link:
https://github.com/kamui/retriable


### Example usage: To loop for certain period until something is done.

- `max_elapsed_time` is important even though `tries` and `base_interval` is defined.
- https://github.com/kamui/retriable/issues/93

```rb
count = 0
Retriable.retriable(on: [MyModule::MyClass::CustomError, Net::OpenTimeout],
                    tries: 360, base_interval: 10, max_elapsed_time: 3600) do
    count += 1
    print "count: #{count} \n"
    raise MyModule::MyClass::CustomError if @food != "tacos"
end
```

### Exponential Backoff:

- 
