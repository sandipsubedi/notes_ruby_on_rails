# Ways to make Rails app more secure:

## ApplicationController
```ruby
class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception # Prevent CSRF attacks by raising an exception.
```

## APIs
```ruby
protect_from_forgery with: :null_session
```
