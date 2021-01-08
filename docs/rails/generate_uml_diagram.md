---
title: Generate UML Diagram
---

### Setup:
- https://github.com/voormedia/rails-erd

1. Add the gem
```rb
group :development do
  gem 'rails-erd'
end
```

2. Install graphviz
```rb
brew install graphviz
```

3. Run erd
```rb
bundle exec erd
```