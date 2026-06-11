function showWelcome() {
  console.log("=== AutoComplete Trie Console ===");
  console.log("Type 'help' for commands");
}


function showAdd(word) {
    console.log(`✓ Added '${word}' to dictionary`);
}

function showSuggestions(prefix, completionsArr) {
    if(completionsArr.length === 0)
        console.log(`no Suggestions for '${prefix}'`);
    else
    {
      const suggestions = completionsArr.map(item => item.word).join(", ");
        console.log(`Suggestions for '${prefix}': ${suggestions}`);
    }

}

function showFound(word) {
  console.log(`✓ '${word}' exists in dictionary`);
}

function showNotFound(word) {
  console.log(`✗ '${word}' not found in dictionary`);
}

function showHelp() {
  
console.log(`Commands:
    add <word>              - Add word to dictionary
    find <word>             - Check if word exists
    complete <prefix>       - Get completions
    help                    - Show this message
    use<word>               - increment the frequency of a word by 1
    exit                    - Quit program

            `);
}
function showExit() {
  console.log(`Goodbye!`);
}

function showInvalidCommand() {
  console.log("Invalid command. Type 'help' for commands.");
}
function showError(message)
{
    console.log(`✗ Error: ${message}`);
}
function showUsed(word, frequency)
{
  console.log(`✓ the word ${word} was used, updated frequency is ${frequency}`);
}
function showNotUsed(word)
{
  console.log(`✗ the word ${word} was not used, since it's not in the dict`);
}

module.exports = {
    showWelcome,
    showAdd,
    showSuggestions,
    showFound,
    showNotFound,
    showHelp,
    showExit,
    showInvalidCommand,
    showError,
    showUsed,
    showNotUsed
};