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
        console.log(`Suggestions for '${prefix}': ${completionsArr.join(", ")}`);
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

module.exports = {
    showWelcome,
    showAdd,
    showSuggestions,
    showFound,
    showNotFound,
    showHelp,
    showExit,
    showInvalidCommand,
    showError
};