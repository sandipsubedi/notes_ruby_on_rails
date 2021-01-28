---
title: Exec
---

### Why do we use `exec` with `bundle`
- `bundle exec` is a Bundler command to execute a script in the context of the current bundle (the one from your directory's Gemfile).
- In some cases, running executables without bundle exec may work, if the executable happens to be installed in your system and does not pull in any gems that conflict with your bundle.
- However, this is unreliable and is the source of considerable pain. Even if it looks like it works, it may not work in the future or on another machine.

### Resources:
https://bundler.io/man/bundle-exec.1.html
