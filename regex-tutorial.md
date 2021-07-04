# Regular Expressions Explained

A Regular expression, commonly referred to as a regex, is a collection of letters, numbers and symbols which represents a search pattern. These search patterns are most commonly used in search algorithms and string operations. They become particularly helpful when validating and sanitizing data.

## Summary

I will be building a regex that checks wether an Australian mobile number is valid or not. It will consider both the traditional `0404` and new `0405` variants that are becoming available. The regular expression will also work if the phone number has been entered with a `+61` or `61` in place of the first `0`.

```
/^0[45]\d{8}$|^\+?61\d{9}$/gm
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

Quantifies specified the desired quantity of a given character or characters. It is generally written as `{n}`, but some shorthands exist eg. `+` for one or more. We have used this on our RegEx for testing Australian mobile numbers on both sides of the or.

Both `\d{8}` and `\d{9}` are both examples of Quantifiers. The `\d` is a character class that represents all digits. When we see `\d{8}` we are looking for a pattern that has 8 digits in a row to match. The quantifier can also take two parameters to represent a range. For example `\d{6,8}` would be look for a 6-8 digits. Parameters can be omitted to represent a less than or greater than. For example `\d{6,}` would look for a pattern with 6 or more digits.

`?` is also an example of shorthand quantifier. It has been used in out RegEx in the form of `\+?`. The `\+` represent an escaped character, which means that we are looking for a literal character of `+`. The `?` means that we are looking for 0 or 1. It is the equivalent of `{0,1}`

#### Shorthands

- `+` means more than one. Equivalent to `x{1,}`
- `?` means zero or one. Equivalent to `x{0,1}`
- `*` means zero or more. Equivalent to `{0,}`

### Grouping Constructs

A capturing group is defined when the objects of that group are placed inside parenthesis `(xyz)`. It allows is to create _mini patterns_ inside our larger patterns. For example if you were trying to find all instances of `the` or `The` in a string you could use a grouping constructor. The expression would look like this `/(t|T)he/g`. Because it is its own group, you can also apply individual quantifiers to that group such as
`/(t|T){2,3}he/`

If you are using the RegEx to output an array of matches, grouping can sometime be helpful as individual group matches can print to their element on the array. This may be handy in some niche cases. We did not employ any grouping constructs on our example. They did exist when I started the RegEx, but after I simplified it they became superfluous.

### Bracket Expressions

Bracket expression, represented as `[xyz]` allows us to specify our own matching pattern. These can also have a quantifier placed directly after them to signify how many times we are looking for the pattern. If no quantifier is written, it is assumed that you only want to see it once.

In our example we have used this for the `04` / `05` search. We know that currently the only numbers available in Australia begin with either of these. To add this to out RegEx we simply needed to start the pattern with an `0` as both have this, and then follow it with a `[45]` which makes all patterns with second digit of either a `4` or `5` pass that part of the regular expression.

It is also possible to specify ranges with bracket expressions. For example if we wanted to look for all numbers between `3` and `8` we could represent that as `[3-8]`. It is true that in out example if we wanted to represent numbers between `4` and `5` we could have written it as `[4-5]`. It also works with letters, but it is case sensitive. if you were looking for all lower case between `b` and `e` you would use `[b-e]`.

### Character Classes

### The OR Operator

The `OR` operator works the same was it does as a logical operator inside JavaScript. It enables as to match a collection of text against two different test patterns, if either returns true it becomes a match. In RegEx OR is represented by a single `|`.

We have used the `OR` or `|` operator to check against two separate patterns. This allows us to simultaneously check against both the `+61`/`61` pattern, and the `04` / `05` pattern in the same RegEx. This is more efficient and takes up less lines of code!

### Flags

Flags dictate how the pattern is applied to the string it being compared against. They occur at the end of the RegEx and in out example we are using `/gm`. This was mainly for testing purposes that will make sense once we understand what each flag does./

The main regular expression flags this will see are:

- `/i` Case Insensitive: this means that when the pattern is running it sees no difference between an `a` and an `A`
- `/g` Global: this means that the RegExp will return **all** matches, not just the first.
- `/m` Multiline: with this flag each line (separated by a new line `\n`) is treated as a new string. This is important when search a list of data when anchors are being used.
- `/s` Dot All: Allows a `.` to match a new line character.

### Character Escapes

## Author

A short section about the author with a link to the author's GitHub profile (replace with your information and a link to your profile)
