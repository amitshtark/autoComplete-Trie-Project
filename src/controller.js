const view = require("./view");
const autoCompleteTrie = require("./autoCompleteTrie");
const trie = new autoCompleteTrie();

function handleCommand(input)
{
    const parts = input.split(" ");
    const command = parts[0];
    const word = parts[1];
    switch (command) {
    case "add": {
        if (!word)
        {
            view.showError(`Missing word for ${command} command`);
            break;
        }
        try {
            trie.addWord(word);
            view.showAdd(word);
            break;
        } catch (err) {
            view.showError(err.message);
            break;
        }
    }

    case "complete": {
        if (!word)
        {
            view.showError(`Missing word for ${command} command`);
            break;
        }
        const allWords = trie.predictWords(word);
        view.showSuggestions(word, allWords);
        break;
    }

    case "find": {
        if (!word)
        {
            view.showError(`Missing word for ${command} command`);
            break;
        }
        if(trie.findWord(word))
            view.showFound(word);
        else
            view.showNotFound(word);
        break;
    }

    case "help":
        view.showHelp();
        break;


    case "use":
        if (!word)
        {
            view.showError(`Missing word for ${command} command`);
            break;
        }
        let frequency = trie.useWord(word);
        if(frequency !== null)
            view.showUsed(word, frequency);
        else
            view.showNotUsed(word);
        break;

    default:
        view.showError(`Unknown command '${command}'`);
    }
}
module.exports = {handleCommand};