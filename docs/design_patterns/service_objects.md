---
title: Service Objects
---

TODO

- The job of a service object is to encapsulate functionality, 
- execute one service
- and provide a single point of failure


### 3 patterns that all service objects follow:
1. Public Initialize method
2. Public Call method
3. Returns a response or error.

### Folder Structure:

```rb
app
  services
    users_service
      creator
      deleter
```

### Resources:
- Service Objects: https://blog.appsignal.com/2020/06/17/using-service-objects-in-ruby-on-rails.html

OpenStruct: TODO