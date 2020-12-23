---
title: Security
---

### ApplicationController
```rb
class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception # Prevent CSRF attacks by raising an exception.
```

### APIs
```rb
protect_from_forgery with: :null_session
```
