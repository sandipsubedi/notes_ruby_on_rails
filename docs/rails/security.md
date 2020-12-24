---
title: Security
---

### ApplicationController
```rb
class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  protect_from_forgery with: :exception 
```

### APIs
```rb
protect_from_forgery with: :null_session
```
