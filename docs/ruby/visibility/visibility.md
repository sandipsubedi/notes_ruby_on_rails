---
title: Method visibility in Ruby
---

- There is really no private methods in Ruby. Because it Ruby provides a way to access private methods.

TODO:
add example of send.

- All methods, no matter the access control, can be accessed within the class. 


1. Public
2. Protected
3. Private

### Public
- All methods are public by default unless marked as private or protected.
- Public methods enforce no access control -- they can be called in any scope.

### Protected
- Protected methods are only accessible within their defining class and its subclasses.

### Private
- Private methods are only accessible within the class definition.
- They are for internal usage.
