const trie = new AutoCompleteTrie();


const addInput = document.getElementById("add-input");
const addBtn = document.getElementById("addBtn");
const messageBox = document.getElementById("message-box");
const suggestionInput = document.getElementById("suggestion-input");
const suggestionList = document.getElementById("suggestion-list");
const counterBox = document.getElementById("counter-box");
const counterNumber = document.getElementById("counter-number");

let wordCount = 0;

function init() {

    updateCounter();
    addBtn.addEventListener("click", handleAddWord);
    suggestionInput.addEventListener("input", handleSuggestionInput);
}


function handleAddWord() {
    let input = addInput.value.trim();

    if(input === "")
    {
        messageBox.textContent = "✗ Cannot add empty word";
        return;
    }
  
    trie.addWord(input);
    wordCount++;
    messageBox.textContent = `✓ Added '${input}' to dictionary`;
    addInput.value = "";
    updateCounter();
}


function handleSuggestionInput() {
  const prefix = suggestionInput.value.trim();

  if(prefix === "")
  {
    clearSuggestions();
    return;
  }

  const suggestions = trie.predictWords(prefix);

  renderSuggestions(suggestions);
}


function handleSuggestionClick(word) {
    trie.useWord(word);
    suggestionInput.value = word;
    handleSuggestionInput();
}




function clearMessage() {
  // clear messageBox
}


function renderSuggestions(suggestions) {
  clearSuggestions();

  for(let suggestion of suggestions){
    const suggestionDiv = document.createElement("div");
    suggestionDiv.textContent = suggestion.word;
    suggestionDiv.classList.add("suggestion-item");
    suggestionDiv.addEventListener("click", function () {
      handleSuggestionClick(suggestion.word);
    });
    suggestionList.appendChild(suggestionDiv);
  }

}


function clearSuggestions() {
  suggestionList.innerHTML = "";
}


function updateCounter() {
  counterNumber.textContent = wordCount;
}


init();