# Getting Started with Chatbots#

## http://tinyurl.com/prewired ##

## Getting the files##

Check that you have Python 2.7 installed. Type

```
% python
```

at the terminal. If you get something like this

```
Python 2.7.5 (default, Aug  1 2013, 01:01:17)
[GCC 4.2.1 Compatible Apple Clang 4.1 ((tags/Apple/clang-421.11.66))] on darwin
Type "help", "copyright", "credits" or "license" for more information.
>>>
```

then you are good to go. Otherwise, install Python 2.7
[using these instructions](http://www.python.org/getit/releases/2.7.5/).

In order to skip the (minor) hassle of installing
[NLTK](http://nltk.org/install.html), we've prepared a zip archive of
just the files you need for running the chatbots. Make a directory (say, `prewired`) where you want to do your work,  [download this
zip file](http://prewired.org/chat.zip) into it, and unzip it.

```
% mkdir prewired
[download chat.zip]
% cd prewired
% unzip chat.zip
```

## Running a chatbot ##

First, make sure you are in the directory (e.g., `prewired`) where you downloaded and unzipped `chat.zip`.

The quickest way to run the chatbots is to call `chat` as a module (using the `-m` option):

```
% python -m chat

Which chatbot would you like to talk to?
  1: Eliza (psycho-babble)
  2: Iesha (teen anime junky)
  3: Rude (abusive bot)
  4: Suntsu (Chinese sayings)
  5: Zen (gems of wisdom)
```

Pick a number and play around with some of the bots. Once you've got a
feeling for what they can and cannot do, have a look at the code of
one of them, such as `chat/eliza.py`. See if you can figure out just from the
`pairs` data what is going on. 

Make a copy of one of the bots, and call it  `mybot.py`:

```
% cp chat/rude.py chat/mybot.py
```

Now you can edit and modify `mybot.py` using your favourite
editor. See if you can come up with a bot that is more amusing than
any of the standard NLTK ones. A simple way to test your modified
version is via the file `test.py` which should be sitting in the
`prewired` directory where you downloaded `chat.zip`. This just calls
the `demo()` function:

```python

from chat.mybot import demo

if __name__ == "__main__":
    demo()
```

If you used a different name than `mybot.py`, modify this file
accordingly.

## Regular Expressions ##

The chatbots all use regular expressions to match input from the user,
and to compute the response. The [Regular Expression HOWTO](http://docs.python.org/2/howto/regex.html) is quite
dense, but nevertheless an essential resource for learning about
Python's regular expression syntax. A more linguistically-oriented
presentation can be found in [Chapter 3, Section 3.4 of the NLTK
book](http://nltk.org/book/ch03.html).

One slight glitch you might notice in the responses produced by the
chatbots is a redundant whitespace character that is inserted when a
substring from the user input gets substituted into the bot's
response. This is illustrated in the following example, where the word
*crazy* is preceded by two whitespace characters in the response.

```
>You are crazy
More like YOU'RE  crazy!
```

See if you can figure out why this sometimes happens.

Another thing you could try would be to use the 'or' operator (`|`) in
your input patterns. This will probably give you an unexpected result
if the response contains a `%` 'backreference'. If you can't work out what the problem is, ask
a mentor for a hint.



