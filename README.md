# AutoComplete Trie Project

A console-based autocomplete application built with a Trie data structure in JavaScript.

## Features

- Add words to the dictionary
- Find if a word exists
- Get autocomplete suggestions by prefix
- Console interface with user commands
- Unit tests with Jest

## Project Structure

```text
.
├── index.js
├── src/
│   ├── autoCompleteTrie.js
│   ├── controller.js
│   └── view.js
├── tests/
│   └── autoCompleteTrie.test.js
├── package.json
└── .gitignore
```

## Install

```bash
npm install
```

## Run

```bash
npm start
```

## Test

```bash
npm test
```

## Commands

```text
add <word>              - Add word to dictionary
find <word>             - Check if word exists
complete <prefix>       - Get completions
help                    - Show commands
exit                    - Quit program
```

## Example

```text
> add cat
✓ Added 'cat' to dictionary

> add car
✓ Added 'car' to dictionary

> complete ca
Suggestions for 'ca': cat, car

> find dog
✗ 'dog' not found in dictionary
```