---
title: Testing private methods
---

TODO

Different school of thoughts:

1. Private methods must be unit testing from the public methods.

2. Private methods can be unit tested by directly calling them
- Can use `subject.send(<METHOD_NAME>)` in ruby, because there is technically no private method in Ruby.
- Please check `send` page to learn more about `send`.
