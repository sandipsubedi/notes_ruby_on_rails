---
title: Session
---

- Sessions allow users to authenticate once and remain signed in for future requests.
- **Sliding window**: Everytime you touch it expires_at gets extended.

### Name of the cookie:
- Name of the cookie matches the key we set in `session_store.rb`
```rb
Rails.application.config.session_store :cookie_store, key: '_my_website_session'
```

- Cookie on Browser:

```
Name: '_my_website_session'
content: '234asdf24234e'
Domain: 'your_website.com'
path: '/'
```

### Sample session object:
```rb
ActiveRecord::SessionStore::Session.first
  ActiveRecord::SessionStore::Session Load (0.5ms)  SELECT "sessions".* FROM "sessions" ORDER BY "sessions"."id" ASC LIMIT $1  [["LIMIT", 1]]
 => #<ActiveRecord::SessionStore::Session id: 1, session_id: "d1223423423412352358", data: "2423423422V4cGlyZXNfYXQ435435asdfHDIwMTYtMD35345AgMT...", created_at: "2016-03-30 14:50:41", updated_at: "2016-03-30 14:50:41">
```

- In data

```rb
2.6.3 :010 > ActiveRecord::SessionStore::Session.first.data
ActiveRecord::SessionStore::Session Load (0.5ms)  SELECT "sessions".* FROM "sessions" ORDER BY "sessions"."id" ASC LIMIT $1  [["LIMIT", 1]]
=> {"expires_at"=>"2020-03-30 15:50:41 UTC"}
```


### Database table for Session:
```rb
ActiveRecord::SessionStore::Session
```
### Cleaning up inactive sessions:
- Automatically cleans up sessions that are inactive for last 30 days.
- https://github.com/rails/activerecord-session_store#installation
```rb
db:sessions:trim
```