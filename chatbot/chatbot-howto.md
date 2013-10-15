# Getting Started with Chatbots#

## Getting the files##

Check that you have Python 2.7 installed. Type

	% python

at the terminal. If you get something like this

	Python 2.7.5 (default, Aug  1 2013, 01:01:17)
	[GCC 4.2.1 Compatible Apple Clang 4.1 ((tags/Apple/clang-421.11.66))] on darwin
	Type "help", "copyright", "credits" or "license" for more information.
	>>>

then you are good to go. Otherwise, install Python 2.7
[using these instructions](http://www.python.org/getit/releases/2.7.5/).

In order to skip the (minor) hassle of installing
[NLTK](http://nltk.org/install.html), we've prepared a zip archive of
just the files you need for running the chatbots. [Download it
here](http://data.inf.ed.ac.uk/catalog/storage/f/2013-10-15T11%3A50%3A03.026Z/chat.zip).

## Running a chatbot ##

The quickest way to run the chatbots is to call `chat` as a module (using the `-m` option):

```% python -m chat

Which chatbot would you like to talk to?
  1: Eliza (psycho-babble)
  2: Iesha (teen anime junky)
  3: Rude (abusive bot)
  4: Suntsu (Chinese sayings)
  5: Zen (gems of wisdom)
```

Pick a number and play around with one of the bots. 