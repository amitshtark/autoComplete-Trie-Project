class AutoCompleteTrie{
    
    constructor(value = "")
    {this.value = value;
     this.children = {};
     this.endOfWord = false;
     this.frequency = 0;
    }
    addWord(word)
    {
        let currentWord = this;

        for(let char of word)
        {
            if(!currentWord.children[char])
                currentWord.children[char] = new AutoCompleteTrie(char);
            currentWord = currentWord.children[char];
        }
        currentWord.endOfWord = true;
    }
    findWord(word){
        let currentWord = this;

        for(let char of word)
        {
            if(!currentWord.children[char])
                return false;
            currentWord = currentWord.children[char];
        }
        return currentWord.endOfWord;;
    }
    predictWords(prefix)
    {
        const currentNode = this._getRemainingTree(prefix, this);
        if(!currentNode)
            return [];

        const allWords = [];
        this._allWordsHelper(prefix, currentNode, allWords);
        return allWords.sort((a,b) => b.frequency - a.frequency);
    }
    useWord(word)
    {
        let currentWord = this._getRemainingTree(word, this)
        if(currentWord && currentWord.endOfWord)
        {
            currentWord.frequency++;
            return currentWord.frequency;
        }
        else
            return null;
    }


//helper methods

    _getRemainingTree(prefix, node)
    {
        let currentWord = node;
        for(let char of prefix)
        {
            if(!currentWord.children[char])
                return null;
            currentWord = currentWord.children[char];
        }
        return currentWord;

    }
    _allWordsHelper(prefix, node, allWords)
    {
        if(node.endOfWord)
            allWords.push({"word": prefix, "frequency": node.frequency});

        for (let char in node.children)
        {
            const childNode = node.children[char];
            this._allWordsHelper(prefix + char, childNode, allWords);
        }
    }
}
module.exports = AutoCompleteTrie;