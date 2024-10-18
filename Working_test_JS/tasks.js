// List of Spiderman's tasks
const spidermanTasks = [
    "Save a young girl stuck on the roof of a burning building!",
    "Stop a runaway train before it derails!",
    "Rescue a school bus dangling off a bridge!",
    "Prevent a bank heist in progress downtown!",
    "Capture the escaped villains wreaking havoc in the city!"
];

// Function to select a random task without repetition
const getRandomTask = () => {
    // Retrieve used tasks from localStorage, or start with an empty array
    let usedTasks = JSON.parse(localStorage.getItem("usedTasks")) || [];
    const availableTasks = spidermanTasks.filter(task => !usedTasks.includes(task));

    // Reset if all tasks have been used
    if (availableTasks.length === 0) {
        usedTasks = [];
        localStorage.setItem("usedTasks", JSON.stringify([]));
    }

    // Select a random task from the available tasks
    const randomTask = availableTasks[Math.floor(Math.random() * availableTasks.length)];

    // Store the used task in localStorage
    usedTasks.push(randomTask);
    localStorage.setItem("usedTasks", JSON.stringify(usedTasks));

    return randomTask;
};
