let input = prompt("What would you like to do?");
const todos = [""];
while(input !== "quit" && input !== "q") {
    input = prompt("What would you like to do?") 

    if(input === "new" || input === "n") {
        const newTodo = prompt("Okay, what's your new todo?");
        todos.push(newTodo);
        console.log(`${newTodo} has been added to list!`);
    } else if(input === "list" || input === "l") {
        console.log("*********************")
        for(let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log("*********************")
    } else if(input === "delete" || input === "d") {
        const removeTodo = parsesInt(prompt("Which index do you want to delete?"));
        if (!Number.NaN(removeTodo)) {
            const deleted = todos.splice(removeTodo, 1);
            console.log(`${deleted[0]} has been deleted.`);
        } else {
            console.log("Unknown index.");
        }
    }
}
console.log("Okay, quitting app...")