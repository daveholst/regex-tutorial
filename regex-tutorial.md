# Regular Expressions Explained

A Regular expression, commonly referred to as a regex, is a collection of letters, numbers and symbols which represents a search pattern. These search patterns are most commonly used in search algorithms and string operations. They become particularly helpful when validating and sanitizing data.

## Summary

I will be building a regex that checks wether an Australian mobile number is valid or not. It will consider both the traditional `0404` and new `0405` variants that are becoming available. The regular expression will also work if the phone number has been entered with a `+61` or `61` in place of the first `0`.

```
/^(0[4,5][0-9]{8})$|^(\+?61[0-9]{9})$/gm
```

## Table of Contents

- [Anchors](#anchors)
- [Quantifiers](#quantifiers)
- [Grouping Constructs](#grouping-constructs)
- [Bracket Expressions](#bracket-expressions)
- [Character Classes](#character-classes)
- [The OR Operator](#the-or-operator)
- [Flags](#flags)
- [Character Escapes](#character-escapes)

## Regex Components

### Anchors

Anchors are used to match a position before, after, or between characters. For example if you tried to match `^a` to `abc` you would get a match as the string starts with an `a`. if you were to try and apply `^b` to `abc` you would not get a match as the string does not start with `b`. In the same way `^` can be used to match the start of a string `$` can be used to match the end of a string.

In our example we are using `$` & `^` in both out our `or` groups. They are used to detect that the string either starts with a `0` or `61` or `+61` and that the strings then finish with the correct amount of digits to make it a valid Australian mobile number.

### Quantifiers

### Grouping Constructs

### Bracket Expressions

### Character Classes

### The OR Operator

### Flags

### Character Escapes

## Author

A short section about the author with a link to the author's GitHub profile (replace with your information and a link to your profile)
