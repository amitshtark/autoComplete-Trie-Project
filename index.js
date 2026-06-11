const promptSync = require("prompt-sync");
const view = require("./src/view");
const controller = require("./src/controller");

const prompt = promptSync();
view.showWelcome();

let running = true;
while(running)
{
    const input = prompt("> ")
    if(input === "exit")
    {
        view.showExit();
        running = false;
    }
    else
        controller.handleCommand(input);
}