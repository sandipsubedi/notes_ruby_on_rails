---
title: RBENV
---

TODO

### Commands:
```rb
Some useful rbenv commands are:
   commands    List all available rbenv commands
   local       Set or show the local application-specific Ruby version
   global      Set or show the global Ruby version
   shell       Set or show the shell-specific Ruby version
   install     Install a Ruby version using ruby-build
   uninstall   Uninstall a specific Ruby version
   rehash      Rehash rbenv shims (run this after installing executables)
   version     Show the current Ruby version and its origin
   versions    List installed Ruby versions
   which       Display the full path to an executable
   whence      List all Ruby versions that contain the given executable
```

### Installing certain version:
```rb
rbenv install 3.0.0
```

- Sometimes you might see this:
:::caution
ruby-build: definition not found: 3.0.0
:::

- To upgrade to lastet rbenv use this:
```rb
brew upgrade rbenv ruby-build
```

### User certain version:
```rb
rbenv install 2.6.3
```


### Check which/where Ruby is installed from:
```rb
➜  ~ which ruby
/usr/bin/ruby
```
### Add rbenv to bash so that it loads every time you open a terminal
```rb
echo 'if which rbenv > /dev/null; then eval "$(rbenv init -)"; fi' >> ~/.zshrc
```