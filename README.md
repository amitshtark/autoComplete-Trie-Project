# AutoComplete Trie Project

Console-based autocomplete app using a Trie data structure in JavaScript.

## Features

- Add words to the dictionary
- Find existing words
- Get autocomplete suggestions by prefix
- Rank suggestions by word usage frequency
- Console commands
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
use <word>              - Increase word usage frequency
help                    - Show commands
exit                    - Quit program
```

## Example

```text
> add cat
✓ Added 'cat' to dictionary

> add car
✓ Added 'car' to dictionary

> use cat
✓ the word cat was used, updated frequency is 1

> complete ca
Suggestions for 'ca': cat, car

> find dog
✗ 'dog' not found in dictionary
```